document.addEventListener("turbolinks:load", function() {
    
     //Menu button
     $('.burger-btn').click(function(){
         $('nav').stop().toggleClass('toggle-btn')  
         $(this).toggleClass('toggle-burger-top-line') 
     })


     //Landing menu
     $('.landing').parent().find('nav').css({
        'position' : 'absolute',
        'z-index': '10',
        'background-color': 'transparent',
        'width': '100%'
     })
})

