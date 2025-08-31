// Select the container
let container = document.querySelector('.container');

// Get the button using getElementsByClassName
let redButton = document.getElementsByClassName('red')[0]; // Access the first element in the collection
let blueButton = document.getElementsByClassName('blue')[0]; // Access the first element in the collection
let greenButton = document.getElementsByClassName('green')[0]; // Access the first element in the collection
let whiteButton = document.getElementsByClassName('white')[0]; // Access the first element in the collection

// Add an event listener
redButton.addEventListener('click', function () {
    container.style.backgroundColor = "red";
});
blueButton.addEventListener('click', function () {
    container.style.backgroundColor = "blue";
});
greenButton.addEventListener('click', function () {
    container.style.backgroundColor = "green";
});
whiteButton.addEventListener('click', function () {
    container.style.backgroundColor = "white";
});
