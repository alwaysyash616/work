console.log('Lets write JavaScript')
let currentSong = new Audio();

function secondsToMinutsSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input";
    }

    const minuts = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinuts = String(minuts).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinuts}:${formattedSeconds}`;
}

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
            // songs.push(element.href);
        }
    }
    return songs;
}

const playMusic = (track, pause = false) => {
    // let audio = new Audio ("/songs/" + track);
    currentSong.src = "/songs/" + track;
    if (!pause) {
        currentSong.play();
        play.src = "/img/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

async function main() {
    // Get the list of all the songs
    let songs = await getSongs();
    playMusic(songs[0], true);
    // currentSong.src = "/songs/" + songs[0].split("/songs/")[1].replaceAll("%20"," ");
    // console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        // songUL.innerHTML = songUL.innerHTML + `<li></li>`;
        songUL.innerHTML = songUL.innerHTML + `<li>
                            <img class="invert" src="/img/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>always yash</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="/img/play.svg" alt="playnow">
                            </div>
                        </li>`;
    }


    //Play the first song
    // var audio = new Audio(songs[7]);
    // audio.play();

    // audio.addEventListener("loadeddata", () => {
    //     console.log(audio.duration, audio.currentSrc, audio.currentTime);
    //     // The duration variable now holds the duration (in seconds) of the audio clip
    // });



    //Attacing an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML);
        });
    });

    // Attach an event listener to play, next and previous
    let play = document.getElementById("play");
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "/img/pause.svg";
        }
        else {
            currentSong.pause();
            play.src = "/img/play.svg";
        }
    });

    //Listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutsSeconds(currentSong.currentTime)}/${secondsToMinutsSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
    document.querySelector(".circle").style.left = (e.offsetX/e.target.getBoundingClientRect().width) * 100 + "%";
    currentSong.currentTime = currentSong.duration * (e.offsetX/e.target.getBoundingClientRect().width);
    currentSong.play();
    });

    //Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0";
    })
    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-120%";
    })
}

main();