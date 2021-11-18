(function ($) {
"use strict";
    $(document).ready(function($){

        /*--
            Mobile Menu
        ------------------------*/
        $('.main-menu nav').meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: ".mobile-menu",
            onePage: true,
        });
        /*--
            Header Search
        -----------------------------------*/
        $( ".header-search .search" ).click(function() {
          $( ".search-form" ).slideToggle( "fast" );
        });
        $(".panel-heading a").on("click", function(){
            $(".panel-heading a").removeClass("active");
            $(this).addClass("active");
        });
        /*--
            Menu Stick
        -----------------------------------*/
        if ($(".sticker")[0]){
            $('.sticker');
            $(window).scroll(function(){
                var wind_scr = $(window).scrollTop();
                var window_width = $(window).width();
                var head_w = $('.sticker').height();
                if (window_width >= 10) {
                    if(wind_scr < 250){
                        if($('.sticker').data('stick') === true){
                            $('.sticker').data('stick', false);
                            $('.sticker').stop(true).animate({opacity : 0}, 300, function(){
                                $('.sticker').removeClass('stick slideDown');
                                $('.sticker').stop(true).animate({opacity : 1}, 300);
                            });
                        }
                    } else {
                        if($('.sticker').data('stick') === false || typeof $('.sticker').data('stick') === 'undefined'){
                            $('.sticker').data('stick', true);
                            $('.sticker').stop(true).animate({opacity : 0},300,function(){
                                $('.sticker').addClass('stick slideDown');
                                $('.sticker.stick').stop(true).animate({opacity : 1}, 300);
                            });
                        }
                    }
                }
            });
        };	
        /*--
            One Page Nav
        -----------------------------------*/
        var top_offset = $('.main-menu').height() - -60;
        $('.main-menu nav ul').onePageNav({
            currentClass: 'active',
            scrollOffset: top_offset,
        });
        /*--
            Smooth Scroll
        -----------------------------------*/
        var scrollOffset = $(window).width() >= 991 ? -100 : -80;
        $('.scroll-down, .mean-nav ul li a').on('click', function(e) {
            e.preventDefault();
            var link = this;
            $.smoothScroll({
              offset: scrollOffset,
              scrollTarget: link.hash
            });
        });	
        /*--
            Home Nivo Slider
        -----------------------------------*/
        $('#mainSlider').nivoSlider({
            directionNav: false,
            animSpeed: 500,
            slices: 18,
            pauseTime: 5000,
            pauseOnHover: false,
            controlNav: false,
            prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
            nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
        });
        /*--
            Home Carousel
        -----------------------------------*/
        $(".home-slider").owlCarousel({
            items:1,
            autoplay: false,
            loop: true,
        });
        /*--
            Testimonial Carousel
        -----------------------------------*/
        $(".testimonial-slider").owlCarousel({
            items:1,
            autoplay: false,
            loop: true,
        });
        /*--
            Testimonial Slick Carousel
        -----------------------------------*/
         $('.testimonial-text-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          draggable: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
        /*--
            Testimonial Slick Carousel as Nav
        -----------------------------------*/
        $('.testimonial-image-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.testimonial-text-slider',
          dots: true,
          arrows: false,
          centerMode: true,
          focusOnSelect: true,
          centerPadding: '40px',
          responsive: [
            {
              breakpoint: 767,
              settings: {
                dots: false,
                centerPadding: '0px',
              }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
              }
            }
          ]
        });
        /*--
            Portfolio Filter
        -----------------------------------*/
        $('#portfolio').mixItUp();
        /*--
            Scroll Up
        ------------------------*/
        $.scrollUp({
            scrollText: '<i class="fa fa-chevron-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        /*--
            Magnific Popup
        -----------------------------------*/
        $('.sin-screenshot a, .portfolio-hover a, .home-5 .single-photo .hover a').magnificPopup({
            type:'image',
            gallery: {
              enabled: true
            },
            mainClass: 'mfp-with-zoom',
        });
        /*--
            Fun Fact
        -----------------------------------*/
        $('.funfacts, #about-area').appear(function() {
            $('.timer').countTo();
        });	
        /*--
            Count Down
        -----------------------------------*/
        $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
            });
        });
        
    });
    
    /*--
        Ajax Contact Form
    -----------------------------------*/
    $(function() {
        // Get the form.
        var form = $('#contact-form, #support-form');
        // Get the messages div.
        var formMessages = $('.form-message');
        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                formMessages.removeClass('error').addClass('success');
                // Set the message text.
                formMessages.text(response);
                // Clear the form.
                $('#contact-form input:not([type=submit]), #contact-form textarea, #support-form input:not([type=submit]), #support-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                formMessages.removeClass('success').addClass('error');
                // Set the message text.
                if (data.responseText !== '') {
                    formMessages.text(data.responseText);
                } else {
                    formMessages.text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
    
})(jQuery);	