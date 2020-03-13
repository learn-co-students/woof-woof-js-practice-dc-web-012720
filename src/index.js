document.addEventListener("DOMContentLodaed", () => {
    fetchDogs();
});

function fetchDogs() {
    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(json => processDogs(json))
    // 
}

function processDogs() {
    let div = document.querySelector("#dog-bar");
    
}