$(document).ready(()=>{

    // (first three numbers) validation
    var phone_num = $('.phone-number-input')
    $(phone_num).val(380)

    $(phone_num).keyup((e)=>{

            if($(e.target).val().length < 3){
                $(e.target).val(380)
            }       
    })


    //Jquery validate
    $.validator.addMethod('phone',function(value,element){
        return value.length == 12
    },'Неякісний номер')

    $.validator.addMethod('validPassword',function(value,element){
        return /^[a-zA-Z0-9_" "]*$/.test(value)
    },'Лише латиниця та нижнє підкреслюваня')
    
    $.validator.addMethod('validName',function(value,element){
        return /^[\'ҐЄІЇєіїА-Яа-яA-Za-z" "]*$/.test(value)
    },'Лише літери та пробіл між словами')
        


    $.validator.setDefaults({
        highlight: function(e){
            $(e).addClass('input-error')
            $(e).parent().children('.input-label').css({'color': 'red'})
        },
        unhighlight: function(e){
            $(e).removeClass('input-error')
            $(e).parent().children('.input-label').css({'color': 'black'})
        }
    })

    $('#register-form').validate({
        rules: {
            "human[name]": {
                required: true,
                maxlength: 40,
                validName: true
            },
            "human[email]": {
                required: true,
                email: true,
                maxlength: 40,
                remote:{
                    url: 'validate',
                    type: 'post'
                }
            },
            "human[number]": {
                required: true,
                phone:true,
                maxlength: 40,
                remote:{
                    url: 'phone',
                    type: 'post'
                }
            },
            "human[password]":{
                required: true,
                validPassword: true,
                minlength: 6,
                maxlength: 40
            },
            "human[password_confirmation]":{
                required: true,
                maxlength: 40,
                equalTo: '#password-confirm'
            }
        },
        messages: {
            "human[name]": {
                required: "Це поле обов'язкове",
                maxlength: "В межах 40 символів",
            },
            "human[email]": {
                required: "Це поле обов'язкове",
                email: "Неякісна пошта",
                remote: "Ця пошта вже зареєстрована",
                maxlength: "В межах 40 символів"
            },
            "human[number]": {
                required: "Це поле обов'язкове",
                remote: "Цей номер вже зареєстрований",
                maxlength: "В межах 40 символів",
            },
            "human[password]":{
                required: "Це поле обов'язкове",
                minlength: "Мінімум 6 символів",
                maxlength: "В межах 40 символів",
            },
            "human[password_confirmation]":{
                required: "Це поле обов'язкове",
                equalTo: 'Паролі мають співпадати',
                maxlength: "В межах 40 символів",
            } 
        }
    })    
})
