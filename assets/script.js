// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Milca Brito" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!
    gb++;
    const quantity = document.querySelector('#qty-gb');
    quantity.innerHTML = gb;

    const total = document.querySelector('#qty-total');
    total.innerHTML = gb + cc + sugar;
})

document.getElementById('minus-gb').addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!

    if (gb > 0) {
        gb--;
        const quantity = document.querySelector('#qty-gb');
        quantity.innerHTML = gb;
    }

    const total = document.querySelector('#qty-total');
    total.innerHTML = gb + cc + sugar;
})

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-cc').addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!
    cc++;
    const quantity = document.querySelector('#qty-cc');
    quantity.innerHTML = cc;

    const total = document.querySelector('#qty-total');
    total.innerHTML = gb + cc + sugar;
})

document.getElementById('minus-cc').addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!

    if (cc > 0) {
        cc--;
        const quantity = document.querySelector('#qty-cc');
        quantity.innerHTML = cc;
    }

    const total = document.querySelector('#qty-total');
    total.innerHTML = gb + cc + sugar;
})

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-sugar').addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!
    sugar++;
    const quantity = document.querySelector('#qty-sugar');
    quantity.innerHTML = sugar;

    const total = document.querySelector('#qty-total');
    total.innerHTML = gb + cc + sugar;
})

document.getElementById('minus-sugar').addEventListener('click', function () {
    // HINT: You can delete this console.log after you no longer need it!

    if (sugar > 0) {
        sugar--;
        const quantity = document.querySelector('#qty-sugar');
        quantity.innerHTML = sugar;
    }

    const total = document.querySelector('#qty-total');
    total.innerHTML = gb + cc + sugar;
})

// TODO: Hook up event listeners for the rest of the buttons