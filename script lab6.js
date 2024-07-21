// main.js

// Example function to recalculate cost
function recalculateCost() {
    let model = document.getElementById('model').value;
    let duration = document.getElementById('duration').value;
    let pricePerDay = model === 'XYZ' ? 100 : 213;
    let totalCost = duration * pricePerDay;
    document.getElementById('totalCost').innerText = `The cost to book Model ${model} for ${duration} days is $${totalCost.toFixed(2)}.`;
}

// Example function to switch models
function switchModel() {
    recalculateCost();
}

// Example function to change duration
function changeDuration() {
    recalculateCost();
}

// Add event listeners
document.getElementById('model').addEventListener('change', switchModel);
document.getElementById('duration').addEventListener('input', changeDuration);
document.getElementById('switchModel').addEventListener('click', switchModel);
document.getElementById('changeDuration').addEventListener('click', changeDuration);

// Initial calculation
recalculateCost();
