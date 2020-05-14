$(document).ready(()=>{
    $('.closed-eye-icon').click(function(){
        $(this).css('display', 'none')
        $(this).parent().find('.opened-eye-icon').css('display', 'block')
        $(this).parent().find('input[type=password]').attr('type','text')
    })

    $('.opened-eye-icon').click(function(){
        $(this).css('display', 'none')
        $(this).parent().find('.closed-eye-icon').css('display', 'block')
        $(this).parent().find('input[type=text]').attr('type','password')
    })
})