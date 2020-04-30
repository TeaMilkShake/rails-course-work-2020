document.addEventListener("turbolinks:load", function() {
    $('#suggestion-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0:{
                items: 1, 
            },
            1000:{
                items: 2, 
            }
        }
    })
})