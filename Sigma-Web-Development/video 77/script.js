
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views < 1000000) {
        viewStr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }




    let html = `<div class="card">
                <div class="image">
                    <img src="${thumbnail}" alt="image">
                <div class="capsule">${duration}</div>

                </div>
                <div class="text">
                    <h1>${title}</h1>
                    <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
                </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

document.querySelector("#btn").addEventListener("click",()=>{
    createCard("Introduction to React | Sigma Web Dev video #2", "CodeWithHarry", 461, 7, "31:22", "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");
})
