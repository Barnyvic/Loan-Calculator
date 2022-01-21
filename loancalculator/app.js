// calling the constant
const formSubmit = document.querySelector("#loan-form");

formSubmit.addEventListener("submit", (e) => {
  //  naming the html collection

  const loan = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const year = document.querySelector("#years");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");
  // calculating the loan
  const loanAmount = parseFloat(loan.value);
  const interestRate = parseFloat(interest.value) / 100 / 12;
  const yearRate = parseFloat(year.value) * 12;
  // calculation process
  const powerOfInterest = Math.pow(1 + interestRate, yearRate);
  const monthly =
    (loanAmount * interestRate * powerOfInterest) / (powerOfInterest - 1);
  // inputing thr value into html
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * yearRate).toFixed(2);
    totalInterest.value = (monthly * yearRate - loanAmount).toFixed(2);
    document.querySelector("#results").style.display = "block";
  } else {
    const errorDiv = (error) => {
      // creating a div
      const alertDiv = document.createElement("div");
      // giving the div a class
      alertDiv.className = "alert alert-danger";
      // get html element
      const card = document.querySelector(".card");
      const heading = document.querySelector(".heading");
      alertDiv.appendChild(document.createTextNode(error));
      card.insertBefore(alertDiv, heading);
    };
    errorDiv("pls input a number");
    // set time out
    let clearTime = document.querySelector(".alert");
    setTimeout(() => {
      clearTime.remove();
    }, 2000);
  }
  setTimeout(() => {
    loan.value = "";
    interest.value = "";
    year.value = "";
  }, 3000);

  e.preventDefault();
});
