document.addEventListener("turbolinks:load", function() {
    $('#Suggestions-wrapper').owlCarousel({
        items:3,
        loop:true,
        center:true,
        margin: 50,
        dots:true,
        responsive: {
            0:{
                items: 1,
                margin: 0           
            },
            600:{
                items:2,
                center:false
            },
            1280:{
                items:3
            }
        }
        
    })
})