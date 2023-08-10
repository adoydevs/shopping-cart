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

document.getElementById('case-plus-button').addEventListener('click' , function(){
    const currentPlusNumber = document.getElementById('get-product-num');
    const currentPlusNumberString = currentPlusNumber.value;
    const getCurrentPlusNumber = parseInt(currentPlusNumberString);

    currentPlusNumber.value = getCurrentPlusNumber + 1;

    const currentProductPrice = document.getElementById('case-price');
    const currentProductPriceString = currentProductPrice.innerText;
    const getCurrentProductPrice = parseInt(currentProductPriceString);

    const getNewProductPrice = getCurrentProductPrice + 59;
    currentProductPrice.innerText = getNewProductPrice;



})

document.getElementById('case-minus-button').addEventListener('click' , function(){
    const currentMinusNumber = document.getElementById('get-product-num');
    const currentMinusNumberString = currentMinusNumber.value;
    const getCurrentMinusNumber = parseInt(currentMinusNumberString);

    currentMinusNumber.value = getCurrentMinusNumber - 1;

    document.getElementById('case-price');


    const currentProductPrice = document.getElementById('case-price');
    const currentProductPriceString = currentProductPrice.innerText;
    const getCurrentProductPrice = parseInt(currentProductPriceString);

    const getNewProductPrice = getCurrentProductPrice - 59;
    currentProductPrice.innerText = getNewProductPrice;

})

// document.getElementById()


// const subtotalPrice = document.getElementById('subtotal-price');
//     const subtotalPriceString = subtotalPrice.innerText;
//     const getSubTotalPrice = parseInt(subtotalPriceString);

//     const getSubtotal = newProductPrice + getNewProductPrice;
//     subtotalPrice.innerText = getSubtotal;