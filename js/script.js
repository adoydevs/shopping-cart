document.getElementById('case-plus-btn').addEventListener('click' , function(){
    const numberValueField = document.getElementById('numofProduct');
    const getNumberString = numberValueField.value;
    const getNumberPrevious = parseInt(getNumberString);

    const getNewNumber = getNumberPrevious + 1;

    numberValueField.value = getNewNumber;



    const getProductPrice = document.getElementById('product-price');
    const getProductPriceString = getProductPrice.innerText;
    const previousProductPrice = parseInt(getProductPriceString);

    const newProductPrice = previousProductPrice + 120;


    getProductPrice.innerText = newProductPrice;





} )

document.getElementById('case-minus-btn').addEventListener('click' , function(){
    const numberMinusField = document.getElementById('numofProduct');
    const getMinusNumberString = numberMinusField.value;
    const getMinusNumberPrevious = parseInt(getMinusNumberString);

    const getMinusNewNumber = getMinusNumberPrevious - 1;

    numberMinusField.value = getMinusNewNumber;


    const decreaseProductPrice = document.getElementById('product-price');
    const decreaseProductPriceString = decreaseProductPrice.innerText;
    const getDecreaseProductPrice = parseInt(decreaseProductPriceString);

    const newDecreaseProductPrice = getDecreaseProductPrice - 120;


    decreaseProductPrice.innerText = newDecreaseProductPrice;


} )