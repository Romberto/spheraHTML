window.addEventListener('load', function(){

    $('#form__get_phone').submit(function(e){
        e.preventDefault()
        $(this).fadeOut()
        setTimeout(function () {           
            $('#form__phone_ok').css('display','flex')   
            }, 500);
       
    })

    $('#form__phone_ok').submit(function(e){
        e.preventDefault()
        $(this).fadeOut()
        setTimeout(function () {           
            $('.viget__form').css('display','flex')   
            }, 500);
    })

});