const URL = "https://dog.ceo/api/breeds/image/random"

const getImage = async () => {
    console.log("Getting data ...");
    let response = await fetch(URL);
    console.log(response);                      // JSON format
    let data = await response.json();           // Javascript Object format
    console.log(data[0]);
}