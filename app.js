let interactive = document.querySelector("#myButton")

interactive.addEventListener("click", userGreeting)

function userGreeting() {
    alert("Hello");
    let name = prompt("What's your name?");

    //Check if the name is 'null'
    if (name === "null") {
        name = "there";
        alert(`Hi ${name}`);
    } else {
        alert(`Hi ${name}`);
    }

    let weather = prompt("What is the weather today?")
    if (weather.toLocaleLowerCase() === "sunny") {
        document.getElementById("changeScr").src="https://giphy.com/embed/wNipYAoZ3iaEE";
    } else if (weather.toLocaleLowerCase() === "rainy") {
        document.getElementById("changeScr").src="https://giphy.com/embed/10hzvF9FTulLxK";
    }
}


