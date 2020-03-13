document.addEventListener("DOMContentLoaded", () => {
    fetchDogs();
    // let isGood = true;
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

function showDetails(pup) {
    let details = document.querySelector("#dog-info");
    let image = document.createElement("img");
    let name = document.createElement("h2");
    image.src = pup.image;
    name = pup.name

    let goodPup = document.createElement("button");
    if (pup.isGoodDog) {
        goodPup.innerText = "Good Dog!"
    } else {
        goodPup.innerText= "Bad Dog!"
    }
    goodPup.addEventListener("click", () => {
        pup.isGoodDog = !pup.isGoodDog;
        if (pup.isGoodDog) {
        goodPup.innerText = "Good Dog!"
    } else {
        goodPup.innerText= "Bad Dog!"
    }
    fetch(`http://localhost:3000/pups/${pup.id}`, {
        method: "PATCH", 
        body: JSON.stringify( {
            name: pup.name,
            image: pup.image, 
            isGoodDog: pup.isGoodDog
        }), 
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
    .then(json => console.log(json))
    })

    details.append(image,name,goodPup)
}



