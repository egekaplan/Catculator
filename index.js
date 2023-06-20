const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', (e)=>{
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr);
        }
        if(isSecondValue === false){
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if(firstValue != "" && sign != "" ){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign(){
    for(let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e)=>{
            sign = e.target.getAttribute('value');
            isFirstValue = true;
         } )
    }
}
getSign();

equals.addEventListener('click', ()=>{
    result.innerHTML = "";
    if(sign === "+"){
        resultValue = firstValue + secondValue;
    } else if (sign === "-"){
        resultValue = firstValue - secondValue;
    } else if(sign === "x"){
        resultValue = firstValue * secondValue;
    }  else if(sign === "/"){
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkResultLength();

})

function checkResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);

    }
}

negative.addEventListener('click', () =>{
    result.innerHTML = "";
    if(firstValue !=""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue !="" && secondValue !="" && sign != ""){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})



percent.addEventListener('click', () =>{
    result.innerHTML = "";
    if(firstValue !=""){
        resultValue = firstValue/100;
        firstValue = resultValue;
    }
    if(firstValue !="" && secondValue !="" && sign != ""){
        resultValue = resultValue/100;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', ()=>{
    result.innerHTML=0;

    firstValue ="";
    isFirstValue=false;
    secondValue="";
    isSecondValue=false;
    sign="";
    resultValue=0;
})
//7
var cat1 = new Audio();
cat1.src = "soundfx/cat1.mp3";

//8
var cat2 = new Audio();
cat2.src = "soundfx/cat2.mp3";

//9
var cat3 = new Audio();
cat3.src = "soundfx/cat3.mp3";

//4
var cat4 = new Audio();
cat4.src = "soundfx/cat4.mp3";

//5
var cat5 = new Audio();
cat5.src = "soundfx/cat5.wav";

//6
var cat6 = new Audio();
cat6.src = "soundfx/cat6.wav";

//1
var cat7 = new Audio();
cat7.src = "soundfx/cat7.mp3";

//2
var cat8 = new Audio();
cat8.src = "soundfx/cat8.mp3";

//3
var cat9 = new Audio();
cat9.src = "soundfx/cat9.mp3";

//operators
var catPlay = new Audio();
catPlay.src = "soundfx/catPlay.mp3";

//result
var catResult = new Audio();
catResult.src = "soundfx/catResult.mp3";

var images = document.querySelectorAll('.item');

for (var i = images.length; i--;) images[i].addEventListener('click', change);

function change() {
  switch (this.value) {
    case "catCry":
      image = '<img src="png/catCry.png"></img>';
      break;
    case "+":
      image = '<img src="png/catAlpha.png"></img>';
      break;
      case "x":
      image = '<img src="png/catAlpha.png"></img>';
      break;
      case "/":
      image = '<img src="png/catAlpha.png"></img>';
      break;
      case "-":
      image = '<img src="png/catAlpha.png"></img>';
      break;
    default:
      image = '<img src="png/catSit.png"></img>';
  }

  document.getElementById("output-image").innerHTML = image;
}