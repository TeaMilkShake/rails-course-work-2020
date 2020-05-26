$(document).ready(()=>{
  
    // If we are on edit page, set image opacity from 0 to 1 and remove edit-file class
    function editImageCheck(image){
      if($(image).parent().hasClass('edit-image') && $(image).attr('src') != ""){
        $(image).css("opacity", '1');

        $(image).parent().find('label').mouseover(()=>{
            $(image).parent().find('.post-file-new-darken').css("opacity","1");
        })
        $(image).parent().find('label').mouseout(()=>{
            $(image).parent().find('.post-file-new-darken').css("opacity","0");
        })
      }
    }
    
    $('.delete-image').click(function(){
      $(this).parent().find('img').attr('src','')
      $(this).parent().find('img').css('opacity','0')
      $(this).parent().find('input[type=file]').val('')

      $(this).parent().find('label').mouseover(()=>{
        $(this).parent().find('.post-file-new-darken').css("opacity","0");
      })
      $(this).parent().find('label').mouseout(()=>{
          $(this).parent().find('.post-file-new-darken').css("opacity","0");
      })
      $(this).parent().find('.delete-image').css("display","none")
    })
    
    editImageCheck($('.post-image-1'));
    editImageCheck($('.post-image-2'));
    editImageCheck($('.post-image-3'));  

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

          //If we are on create page, execute readURL method and add opacity 1 to the suggestio image
          $(image).parent().find('input').change(function(){
            readURL(this);
            $(image).css("opacity", '1');
  
            $(image).parent().find('label').mouseover(()=>{
                $(image).parent().find('.post-file-new-darken').css("opacity","1");
            })
            $(image).parent().find('label').mouseout(()=>{
                $(image).parent().find('.post-file-new-darken').css("opacity","0");
            })
            $(image).parent().find('.delete-image').css("display","block")
          });
   
    }

    uploadPreview($('.post-image-1'));
    uploadPreview($('.post-image-2'));
    uploadPreview($('.post-image-3'));  
})

