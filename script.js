var btnPlus = document.getElementsByClassName("btn-plus");
const unitPricePhone = 1219;
const unitPriceCase = 59;

btnPlus[0].addEventListener("click",function(){
    var currentNumber = plus("phone-id");
    var itemTotalPricePhone = unitPricePhone*currentNumber;
    document.getElementById("phone-price-id").innerText = itemTotalPricePhone;
    document.getElementById("phone-id").value = currentNumber;
})
btnPlus[1].addEventListener("click",function(){
    var currentNumber = plus("cover-id");
    var itemTotalPriceCase = unitPriceCase*currentNumber;
    document.getElementById("cover-price-id").innerText = itemTotalPriceCase;
    document.getElementById("cover-id").value = plus("cover-id");
})

var btnMinus = document.getElementsByClassName("btn-minus");

btnMinus[0].addEventListener("click",function() {
    var currentNumber = minus("phone-id");
    var itemTotalPricePhone = unitPricePhone*currentNumber;
    document.getElementById("phone-price-id").innerText = itemTotalPricePhone;
    document.getElementById("phone-id").value = currentNumber;    
})
btnMinus[1].addEventListener("click",function() {
    var currentNumber = minus("cover-id");
    var itemTotalPriceCase = unitPriceCase*currentNumber;
    document.getElementById("cover-price-id").innerText = itemTotalPriceCase;
    document.getElementById("cover-id").value = minus("cover-id");  
})

function plus(id){
    var current = document.getElementById(id).value;
    var currentNumber = parseFloat(current);
    currentNumber++;
    return currentNumber;
}

function minus(id) {
    var current = document.getElementById(id).value;
    var currentNumber = parseFloat(current);
    currentNumber--;
    return currentNumber;
}
