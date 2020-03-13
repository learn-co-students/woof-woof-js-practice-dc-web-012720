document.addEventListener("DOMContentLodaed", () => {
    
    fetchDogs;
});

function fetchDogs() {
    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(json => json.forEach(pup => processDog(pup)))
}

function processDog(pup) {
    let dogBar = document.querySelector("#dog-bar");
    let dog = document.createElement('span');
    dog.innerText = pup.name
    dogBar.append(dog)
}