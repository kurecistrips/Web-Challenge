const inputNum = document.getElementById("cardnum");
const cardNum = document.getElementById("card-num-showcase");

const inputName = document.getElementById("holdername");
const cardName = document.getElementById("card-name-showcase");

const inputCVC = document.getElementById("cvc");
const cardCVC = document.getElementById("card-cvc-showcase");

const inputExpMM = document.getElementById("expmonth");
const cardExpM = document.getElementById("card-exp-mm");

const inputExpYY = document.getElementById("expyear");
const cardExpY = document.getElementById("card-exp-yy");

let namePattern = /^[a-zA-Z\s]*$/;
let mmPattern = /^(0[1-9]|1[0-2])$/
let yyPattern = /^\d{2}$/;
let cvcPatter = /^\d*$/;


inputNum.addEventListener("input", updateValue);
inputName.addEventListener("input", updateValueName);
inputCVC.addEventListener("input", updateValueCVC)
inputExpMM.addEventListener("input", updateValueExpM)
inputExpYY.addEventListener("input", updateValueExpY);


function updateValue(e)
{
    cardNum.textContent = e.target.value;
}
function updateValueName(e)
{
    cardName.textContent = e.target.value;
}
function updateValueCVC(e)
{
    cardCVC.textContent = e.target.value;
}
function updateValueExpM(e)
{
    cardExpM.textContent = e.target.value;
}
function updateValueExpY(e)
{
    cardExpY.textContent = e.target.value;
}

function ButtonClick()
{
    if (inputNum.value == "" || inputNum.value.length < 19 || inputName.value == "" || inputExpYY.value == "" || inputExpMM.value == "" || inputCVC.value == "" || !namePattern.test(inputName.value) || !mmPattern.test(inputExpMM.value) || !yyPattern.test(inputExpYY.value) || !cvcPatter.test(inputCVC.value))
    {

    }
    else
    {
        document.getElementById('fill-form').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block'
    }
    
}

function ContinueButton()
{
    window.location.reload();   
    cardName.textContent = "Jane Appleseed";
    cardNum.textContent = "0000 0000 0000 0000";
    cardExpM.textContent = "00";
    cardExpY.textContent = "00";
    cardCVC.textContent = "123";
    inputName.value = "";
    inputNum.value = "";
    inputExpMM.value = "";
    inputExpYY.value = "";
    inputCVC.value = "";
}

