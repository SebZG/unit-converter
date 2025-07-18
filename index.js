/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("unit-input");
const btn = document.getElementById("convert-btn");
const metersFeetP = document.querySelector(".conversions-container:nth-child(1) p");
const litersGallonsP = document.querySelector(".conversions-container:nth-child(2) p");
const kilosPoundsP = document.querySelector(".conversions-container:nth-child(3) p");

inputEl.defaultValue = 0
metersFeetP.textContent = `0 meters = 0 feet | 0 feet = 0 meters`;
litersGallonsP.textContent = `0 liters = 0 gallons | 0 gallons = 0 liters`;
kilosPoundsP.textContent = `0 kilos = 0 pounds | 0 pounds = 0 kilos`;

btn.addEventListener("click", () => {
    const inputVal = parseFloat(inputEl.value)

    const metersFeetVal = metersFeet(inputVal).metersToFeet;
    const feetMetersVal = metersFeet(inputVal).feetToMeters;
    const litersGallonsVal = litersGallons(inputVal).litersToGallons; 
    const gallonsLitersVal = litersGallons(inputVal).gallonsToLiters;
    const kilosPoundsVal = kilosPounds(inputVal).kilosToPounds;
    const poundsKilosVal = kilosPounds(inputVal).poundsToKilos

    metersFeetP.textContent = `${inputVal} meters = ${metersFeetVal} feet | ${inputVal} feet = ${feetMetersVal} meters`;
    litersGallonsP.textContent = `${inputVal} liters = ${litersGallonsVal} gallons | ${inputVal} gallons = ${gallonsLitersVal} liters`;
    kilosPoundsP.textContent = `${inputVal} kilos = ${kilosPoundsVal} pounds | ${inputVal} pounds = ${poundsKilosVal} kilos`;
})

function metersFeet(val) {
    let metersToFeet = 0;
    let feetToMeters = 0;
    metersToFeet = parseFloat((val * 3.281).toFixed(3));
    feetToMeters = parseFloat((val / 3.281).toFixed(3));
    return { metersToFeet, feetToMeters }
}

function litersGallons(val) {
    let litersToGallons = 0;
    let gallonsToLiters = 0;
    litersToGallons = parseFloat((val * 0.264).toFixed(3));
    gallonsToLiters = parseFloat((val / 0.264).toFixed(3));
    return { litersToGallons, gallonsToLiters }
}

function kilosPounds(val) {
    let kilosToPounds = 0;
    let poundsToKilos = 0;
    kilosToPounds = parseFloat((val * 2.204).toFixed(3));
    poundsToKilos = parseFloat((val / 2.204).toFixed(3));
    return { kilosToPounds, poundsToKilos }
}