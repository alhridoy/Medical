(function ($) {

    "use strict";

 
    /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    
    /*==== Sticky ====*/
    $("#header").sticky({topSpacing:0});
    

   
    
    
    //Two Item Carousel
  
    //Two Item Carousel
    if ($('.two-item-carousel').length) {
        $('.two-item-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            smartSpeed: 700,
            autoplay: 5000,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                480:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:2
                }
            }
        });         
    }
        // contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });   
    
    
    
})(jQuery);