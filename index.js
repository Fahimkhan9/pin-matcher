

const generateForm = document.getElementById("generate-form")
console.log(generateForm);
const generateBtn = document.querySelector(".generate-btn")
console.log(generateBtn);
const calculateForm = document.getElementById("calculate-form")
console.log(calculateForm);
const submitBtn = document.querySelector(".submit-btn")
console.log(submitBtn);
const pinMatch = document.getElementById("pin-match")
const pinUnmatch = document.getElementById("pin-unmatch")

pinMatch.style.display = 'none'
pinUnmatch.style.display = 'none'

const randomFourDigitNumber = Math.floor(Math.random() * (9999 - 1000)) + 1000
console.log(randomFourDigitNumber);
generateBtn.addEventListener("click",function () {
    generateForm.value = randomFourDigitNumber
})

function showCalculateFormValue(number){
 calculateForm.value += number
}
submitBtn.addEventListener("click", function(){
    
    if (calculateForm.value !== '' && generateForm.value !== '' && calculateForm.value == generateForm.value) {
        console.log('m');
        pinMatch.style.display= 'block'
    } else {
        console.log('um');
        pinUnmatch.style.display = 'block'
    }
})



