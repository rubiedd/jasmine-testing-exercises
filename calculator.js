
let amount = 250000;
let years = 15;
let rate = 2.7;
let newAmount = 0;
let newYears = 0;
let newRate = 0;

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountIV = document.getElementById("loan-amount");
  amountIV.value = amount;
  let yearsIV = document.getElementById("loan-years");
  yearsIV.value = years;
  let rateIV = document.getElementById("loan-rate");
  rateIV.value = rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  newAmount = getCurrentUIValues().amount;
  newYears = getCurrentUIValues().years;
  newRate = getCurrentUIValues().rate;
  calculateMonthlyPayment(newAmount, newYears, newRate);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (newRate / 100) / 12;
  let n = Math.floor(newYears * 12);
  let total = ((monthlyRate * newAmount) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2);
  return updateMonthly(total);
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const payment = document.getElementById("monthly-payment");
  let myPayment = payment.innerText = "$" + monthly;
  console.log(myPayment);
  return myPayment;
}


