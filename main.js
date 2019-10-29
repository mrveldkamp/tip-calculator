// Tip Calculator

// Add Event Listener to Button
document.getElementById('calc-btn').addEventListener('click', calcTip);

// Event Function
function calcTip() {
  // Get Inputs
  let billAmt = document.getElementById('bill-amt').value;
  let tipPercent = document.getElementById('tip-perc').value;
  let numPeople = document.getElementById('num-people').value;

  // Calculate Tip
  let tipAmt = billAmt * (tipPercent / 100) / numPeople;

  // Output Tip
  document.getElementById('tip-amt').innerHTML = tipAmt.toFixed(2);
}