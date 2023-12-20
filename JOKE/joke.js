const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
let audio = new Audio('giggity.mp3');
const apikey = "zpKQddWCrqqhqOQvGF4opw==6vDVqfQJesrOAYAV"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
} 

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"


async function getJoke(){
    
    try {
        jokeEl.innerText = "Loading...";
        btnEl.disabled = true;
        
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
        audio.play();
        jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText("Error Happened Try again Later")
        console.log(error)
    }

    
}

btnEl.addEventListener("click", getJoke)