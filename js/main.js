window.addEventListener('load', function(){
    var page = $('html, body');
    $('.scrollRow__link_down, .scrollRow__link__up').click(function(e) {
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        e.preventDefault()
        return false;
    });

    $('.menu').fadeOut()

    // var tempScrollTop,currentScrollTop = 0;

    // var way = "default"; // направление
    // var page = $('html, body')

    // $(window).scroll(function(){
    //     currentScrollTop = $(window).scrollTop();
    //     if (tempScrollTop < currentScrollTop && currentScrollTop<=3){
    //         way= "down"; // крутнули вниз колес
    //         page.animate({scrollTop: $('#djeeping').offset().top},500)
          
    //     } else if (tempScrollTop > currentScrollTop){
    //         way= "up"; // крутнули вверх колесо

        
    //     }
    //     tempScrollTop = currentScrollTop;
    // });



    setTimeout(function () {
        var excursions = $('.excursions__pay-text')
        
        excursions.animate({top: '65px'}, 1500)

        }, 500);
    
    $(window).scroll(function(){
        var currentScrollTop = $(window).scrollTop(); 
        var djeeping = $('.djeeping__pay-text');
        var ritail = $('.ritail__pay-text');
        var excursions = $('.excursions__pay-text');
        var menu = $(".menu");
        var menu_btn = $('.js_menu__btn')
        if(currentScrollTop > 0 && currentScrollTop < 300){
            excursions.fadeIn()
            djeeping.fadeOut()
            menu_btn.fadeIn(500)
        }else if(currentScrollTop > 300 && currentScrollTop < 1200){        
            djeeping.fadeIn(500)
            ritail.fadeOut(2000)
            excursions.fadeOut(1000)
            menu.fadeOut(500)
        }else if(currentScrollTop > 1200 && currentScrollTop < 1250){
            djeeping.fadeOut(2000)
            ritail.fadeIn(1000)
            excursions.fadeOut(1000)
            menu.fadeOut(500)
        }
    })

    $(document).mouseup(function (e) {
        var container = $(".menu");
        var menu_btn = $('.js_menu__btn');
        if (container.has(e.target).length === 0){
            container.fadeOut(500);
            menu_btn.fadeIn(500);
        }
      });

    $('.js_menu__btn').on('click', function(){
        var menu = $('.menu')
        var menu_btn = $('.js_menu__btn')      
        menu.fadeIn(500)
        menu_btn.fadeOut(500)


    })


       
        

        
        


});