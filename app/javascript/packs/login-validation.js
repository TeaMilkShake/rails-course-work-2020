document.addEventListener("turbolinks:load", function() {

    // (first three numbers) validation
    var phone_num = $('.phone-number-input')

    $(phone_num).keyup((e)=>{

            if($(e.target).val().length < 3){
                $(e.target).val(380)
            }       
    })


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

    $('#login-form').validate({
        rules: {
            "humanLogin[number]": {
                required: true,
                phone:true,
                remote:{
                    url: 'loginPhone',
                    type: 'post'
                }
            },
            "humanLogin[password]":{
                required: true,
                minlength: 6,
 
            },
        },
        messages: {
            "humanLogin[number]": {
                required: "Це поле обов'язкове",
                remote: "Номер не зареєстрований"
            },
            "humanLogin[password]":{
                required: "Це поле обов'язкове",
                minlength: "Мінімум 6 символів",
            }
        }
    })    
})
