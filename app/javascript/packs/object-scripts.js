document.addEventListener("turbolinks:load", function() {
    $('.suggestion-delete-btn').click(()=>{
        $('.warning-wrapper').css({
            'visibility': 'visible'
        })

        $('.warning-darken').css({
                'opacity': '1'          
        })
        $('.warning-card').css({
                'opacity': '1'          
        })
    })

    $('.warning-back').click(()=>{

        $('.warning-darken').css({
                'opacity': '0'   
        })
        $('.warning-card').css({
                'opacity': '0'
        })
        
        $('.warning-wrapper').css({
            'visibility': 'hidden'
        })
    })
})
