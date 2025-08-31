const inputb = document.querySelector('.age-dob-input');
const calc = document.querySelector('.calculate-btn'); // Fixed typo in class name
const age1 = document.querySelector('.age-result');

console.log(inputb, calc, age1);

calc.addEventListener('click', () => {
    if (inputb.value === "") {
        alert("Please enter your birth date.");
    } else {
        const dob = new Date(inputb.value);
        if (isNaN(dob.getTime())) { // Validate if the date is valid
            alert("Please enter a valid date.");
            return;
        }
        const dob_year = dob.getFullYear();
        const now = new Date();
        const now_year = now.getFullYear();
        const age = now_year - dob_year;

        age1.innerHTML = `Your age is ${age}`; // Updated to the correct property
    }
});
