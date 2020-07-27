//selecting elements
const generateForm = document.getElementById("generate-form");

const generateBtn = document.querySelector(".generate-btn");

const calculateForm = document.getElementById("calculate-form");

const submitBtn = document.querySelector(".submit-btn");

const pinMatch = document.getElementById("pin-match");

const pinUnmatch = document.getElementById("pin-unmatch");

const caseDecrease = document.getElementById("case-decrease");

//added display none
pinMatch.style.display = "none";

pinUnmatch.style.display = "none";

//random four digit number
const randomFourDigitNumber = Math.floor(Math.random() * (9999 - 1000)) + 1000;

//generating four digits number into generate number form
generateBtn.addEventListener("click", function () {
  generateForm.value = randomFourDigitNumber;
});

//function for showing number value into input
function showCalculateFormValue(number) {
  calculateForm.value += number;
}

//function for clearing  all input value
function clearAllCalculateFormValue() {
  calculateForm.value = "";
}

//function for claring only last element of input value
function deleteOneCalculateFormValue() {
  var calculateFormValue = calculateForm.value;
  calculateForm.value = calculateFormValue.substr(
    0,
    calculateFormValue.length - 1
  );
}

//checking whether pin is correct or incorrect
submitBtn.addEventListener("click", function () {
  if (
    calculateForm.value !== "" &&
    generateForm.value !== "" &&
    calculateForm.value == generateForm.value
  ) {
    pinMatch.style.display = "block";
  } else {
    pinUnmatch.style.display = "block";
  }

  //some functionality for "3 try left"
  //if the user try 3 times the submit button will be disabled
  var currentCase = caseDecrease.innerHTML;

  var currentCaseNumber = parseFloat(currentCase);

  caseDecrease.innerHTML = --currentCaseNumber;

  if (currentCaseNumber === 0) {
      
    caseDecrease.innerHTML = "0 ";

    submitBtn.setAttribute("disabled", "disabled");
  }


});


