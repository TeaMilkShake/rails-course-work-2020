document.addEventListener("turbolinks:load", function() {
    $('.search-form').validate({
        rules: {
            "search[priceFrom]": {
                maxlength: 12
            },
            "search[priceTo]": {
                maxlength: 12
            },
            "search[squareFrom]": {
                maxlength: 8
            },
            "search[squareTo]": {
                maxlength: 8
            },
            "search[city]":{
                cityValidation: true,
                maxlength: 30
            }
        },
        messages: {
            "search[priceFrom]": {
                maxlength: "Не може бути більше 99 999 999.99",
            },
            "search[priceTo]": {
                maxlength: "Не може бути більше 99 999 999.99",
            },
            "search[squareFrom]": {
                maxlength: "Не може бути більше 9 999.99",
            },
            "search[squareTo]": {
                maxlength: "Не може бути більше 9 999.99",
            },
            "search[city]":{
                maxlength: "В межах 30 символів",
            }
        }
    })   
})
