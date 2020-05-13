document.addEventListener("turbolinks:load", function() {

    //Single checkbox field for type
    $('.type-input').click((e)=>{
        $('.type-input').not(e.target).prop("checked", false)
        if(e.target.data("input-clicked") == "false"){
            e.target.prop("checked", true)
            e.target.attr("data-input-clicked", "true")
        }else{
            e.target.prop("checked", false)
            e.target.attr("data-input-clicked", "false")
        }
    })

    //Single checkbox field for category
    $('.category-input').click((e)=>{
        $('.category-input').not(e.target).prop("checked", false)
        if (e.target.data("input-clicked") == "false"){
            e.target.prop("checked", true)
            e.target.attr("data-input-clicked", "true")
        }else{
            e.target.prop("checked", false)
            e.target.attr("data-input-clicked", "false")
        }
    })




    //Image validation
    $.validator.addMethod('imageFormat',function(value,element){
        var file_extention = value.substr(value.lastIndexOf('.') + 1);
        var allowed_extentions = ['jpeg','jpg','png','jfif'];
        return allowed_extentions.lastIndexOf(file_extention) != -1 || value == ""
    },'Тільки формат jpeg, jpg, png, jfif')

  

    //Address validation
    $.validator.addMethod('addressValidation',function(value,element){
        return /^[\/0-9ҐЄІЇєіїА-Яа-яA-Za-z\.\-" "]*$/.test(value)
    },"Тільки літери на цифри")

        //Address validation
        $.validator.addMethod('cityValidation',function(value,element){
            return /^[ҐЄІЇєіїА-Яа-яA-Za-z" "]*$/.test(value)
        },"Тільки літери")


    function formatNumber(n) {
        // format number 1000000 to 1,234,567
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      }
      
      
      function formatCurrency(input, blur) {
        // appends $ to value, validates decimal side
        // and puts cursor back in right position.
        
        // get input value
        var input_val = input.val();
        
        // don't validate empty input
        if (input_val === "") { return; }
        
        // original length
        var original_len = input_val.length;
      
        // initial caret position 
        var caret_pos = input.prop("selectionStart");
          
        // check for decimal
        if (input_val.indexOf(".") >= 0) {
      
          // get position of first decimal
          // this prevents multiple decimals from
          // being entered
          var decimal_pos = input_val.indexOf(".");
      
          // split number by decimal point
          var left_side = input_val.substring(0, decimal_pos);
          var right_side = input_val.substring(decimal_pos);
      
          // add commas to left side of number
          left_side = formatNumber(left_side);
      
          // validate right side
          right_side = formatNumber(right_side);
          
          // On blur make sure 2 numbers after decimal
          if (blur === "blur") {
            right_side += "00";
          }
          
          // Limit decimal to only 2 digits
          right_side = right_side.substring(0, 2);
      
          // join number by .
          input_val = left_side + "." + right_side;
      
        } else {
          // no decimal entered
          // add commas to number
          // remove all non-digits
          input_val = formatNumber(input_val);
          input_val = input_val;
          
          // final formatting
          if (blur === "blur") {
            input_val += ".00";
          }
        }
        
        // send updated string to input
        input.val(input_val);
      
        // put caret back in the right position
        var updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input[0].setSelectionRange(caret_pos, caret_pos);
      }


    $(".price-input").on({
        keyup: function() {
          formatCurrency($(this));
        },
        blur: function() { 
          formatCurrency($(this), "blur");
        }
    });

    $(".square-input").on({
        keyup: function() {
          formatCurrency($(this));
        },
        blur: function() { 
          formatCurrency($(this), "blur");
        }
    });

    $('#new-post-form').validate({
        rules: {
            "suggestion[image1]":{
                required: function(element){
                    return $(element).parent().hasClass('edit-image') != true
                }
            },
            "suggestion[description]": {
                required: true,
                maxlength: 500,
            },
            "suggestion[price]": {
                required: true,
                maxlength: 12
            },
            "suggestion[square]": {
                required: true,
                maxlength: 8
            },
            "suggestion[address]":{
                required: true,
                maxlength: 50,
                addressValidation: true
            },
            "suggestion[city]":{
                required: true,
                cityValidation: true,
                maxlength: 30
            },
            "suggestion[category][]":{
                required: true,
            },
            "suggestion[flat_type][]":{
                required: true,
            }
        },
        messages: {
            "suggestion[image1]": {
                required: "Мінімум 1 зображеня"
            },
            "suggestion[description]": {
                required: "Це поле обов'язкове",
                maxlength: "В межах 500 символів",
            },
            "suggestion[price]": {
                required: "Це поле обов'язкове",
                maxlength: "Не може бути більше 99 999 999.99",
            },
            "suggestion[square]": {
                required: "Це поле обов'язкове",
                maxlength: "Не може бути більше 9 999.99",
            },
            "suggestion[city]":{
                required: "Це поле обов'язкове",
                maxlength: "В межах 30 символів",
            },
            "suggestion[address]":{
                required: "Це поле обов'язкове",
                maxlength: "В межах 50 символів",
            },
            "suggestion[category][]":{
                required: "Це поле обов'язкове"
            },
            "suggestion[flat_type][]":{
                required: "Це поле обов'язкове"
            } 
        }
    })    

    $('.post-files-upload input[type=file]').each(function(){
        $(this).rules('add',{
            imageFormat: true,
        })
    })
})