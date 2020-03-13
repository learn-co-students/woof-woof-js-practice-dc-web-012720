document.addEventListener("DOMContentLodaed", () => {
    
    fetchDogs;
    // let pupSpan = document.querySelectorAll(".pups");
    // pupSpan.addEventListener("click", showDetails);
    let isGood = true;
});

function fetchDogs() {
    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(json => json.forEach(pup => processDog(pup)))
}

function processDog(pup) {
    let dogBar = document.querySelector("#dog-bar");
    let dog = document.createElement('span');
    dog.className = "pups"
    dog.innerText = pup.name
    dogBar.append(dog)
    dog.addEventListener("click", () => showDetails(pup));
}

function showDetails(event) {
    let details = document.querySelector("#dog-info");
    let image = document.createElement("img");
    let name = document.createElement("h2");
    let btn = document.createElement("button");
    debugger;
    image.src = event.image;
    name = event.name 
    

}