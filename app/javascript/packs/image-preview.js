document.addEventListener("turbolinks:load", function() {
    var uploadPreview = function(image){
        function readURL(input) {
            if (input.files && input.files[0]) {
              var reader = new FileReader();
        
              reader.onload = function (e) {
                $(image).attr('src', e.target.result);
              }
              reader.readAsDataURL(input.files[0]);
            }
        }

        $(image).parent().find('input').change(function(){
            readURL(this);
            $(image).css("opacity", '1');
  
            $(image).parent().find('label').mouseover(()=>{
                $(image).parent().find('.post-file-new-darken').css("opacity","1");
            })
            $(image).parent().find('label').mouseout(()=>{
                $(image).parent().find('.post-file-new-darken').css("opacity","0");
            })
          });
    }

    uploadPreview($('.post-image-1'));
    uploadPreview($('.post-image-2'));
    uploadPreview($('.post-image-3'));  
})

