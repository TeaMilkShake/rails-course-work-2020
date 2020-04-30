document.addEventListener("turbolinks:load", function() {
    
     //Menu button
     $('.burger-btn').click(function(){
         $('nav').stop().toggleClass('toggle-btn')  
         $(this).toggleClass('toggle-burger-top-line') 
     })
})

