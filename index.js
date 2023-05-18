/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el") // meters
let volumeEl = document.getElementById("volume-el") // liters
let massEl = document.getElementById("mass-el") // kilos

const meterToFeet =  3.281
const feetToMeter = 0.304
const literToGallon =  0.264
const gallonToLiter = 3.785
const kiloToPound =  2.204
const poundToKilo = 0.454

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${Math.round(baseValue * meterToFeet)} feet | ${baseValue} feet = ${Math.round(baseValue * feetToMeter)} meter` 
    volumeEl.textContent = `${baseValue} liter = ${Math.round(baseValue * literToGallon)} gallon | ${baseValue} gallon = ${Math.round(baseValue * gallonToLiter)} liter`
    massEl.textContent = `${baseValue} kilo = ${Math.round(baseValue * kiloToPound)} pound | ${baseValue} pound = ${Math.round(baseValue * poundToKilo)}  kilo`
})

