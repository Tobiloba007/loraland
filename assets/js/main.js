/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready(function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function(e) {
            e.preventDefault();
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function(e) {
            e.preventDefault();
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function(e) {
            e.preventDefault();
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Scroll Js Start <<//
        const scrollPath = document.querySelector(".scroll-up path");
        const pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        const updatescroll = function() {
            let scrolltotal = $(window).scrollTop();
            let height = $(document).height() - $(window).height();
            let scrolltotalheight = pathLength - (scrolltotal * pathLength) / height;
            scrollPath.style.strokeDashoffset = scrolltotalheight;
        };
        updatescroll();

        $(window).scroll(updatescroll);
        const offset = 50;
        const duration = 950;

        $(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".scroll-up").addClass("active-scroll");
            } else {
                jQuery(".scroll-up").removeClass("active-scroll");
            }
        });

        $(".scroll-up").on("click", function(event) {
            event.preventDefault();
            jQuery("html, body").animate({
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });


        //>> Banner Three Slider Start <<//
        const sliderActive1 = ".hero-content-slider";
        const sliderInit1 = new Swiper(sliderActive1, {
            loop: true,
            slidesPerView: 3,
            speed: 2000,
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function() {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }

        animated_swiper(sliderActive1, sliderInit1);
        const heroImageSlider = new Swiper(".hero-image-slider", {
            loop: "true",
            effect: "fade",
            slidesPerView: 3,
            speed: 2000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        const heroTextSlider2 = new Swiper(".hero-text-slider-2", {
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            // direction: "vertical",
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },

        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {}
        });

        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        //>> Data Background Start <<//
        $("[data-background").each(function() {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });

        //>> Testimonial Swiper Slide Start <<//
        const testimonialImageSlider = new Swiper(".testimonial-image-slider", {
            loop: true,
            spaceBetween: 20,
            autoplay: true,
            slidesPerView: 3,
            speed: 1000,
            direction: "vertical",
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        const testimonialSlideContent = new Swiper(".testimonial-slide-content", {
            loop: true,
            spaceBetween: 20,
            autoplay: true,
            slidesPerView: 1,
            speed: 1000,
            direction: "vertical",
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
            speed: 800,
            loop: "true",
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        //>> Portfolio Swiper Slide Start <<//
        const portfolioSlider = new Swiper(".portfolio-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        const portfolioSlider2 = new Swiper(".portfolio-slider-2", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        //>> Work Cases Swiper Slide Start <<//
        const workCasesSlider = new Swiper(".work-cases-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 3,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Work Cases Swiper Slide Start <<//
        const workCasesSlider2 = new Swiper(".work-cases-slider-2", {
            spaceBetween: 60,
            speed: 1000,
            loop: "true",
            slidesPerView: 3,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Brand Swiper Slide Start <<//
        const brandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Case Study Swiper Slide Start <<//
        const caseStudyWrapper2 = new Swiper(".case-study-wrapper-2", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 3,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Product Details Swiper Slide Start <<//
        const shopSliderThumb = new Swiper(".shop-slider-thumb", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".right-array",
                prevEl: ".left-array",
            },
        });

        const shopSingleProductSlide = new Swiper(".shop-single-slide", {
            speed: 1000,
            loop: "true",
            grabCursor: true,
            navigation: {
                nextEl: ".right-array",
                prevEl: ".left-array",
            },
            thumbs: {
                swiper: shopSliderThumb,
            },
        });

        const productSlider = new Swiper(".product-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 4,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Action Start <<//
        $(".action").click(function(e) {
            e.preventDefault();

            $(".slide-list").removeClass("active");
            let slide = $(this).closest(".slide-list");
            slide.addClass("active");
        });

        //>> Active Js Start <<//
        $(".service-box-items-2").hover(
            function() {
                $(".service-box-items-2").removeClass("active");
                $(this).addClass("active");
            }
        );

        //>> Quantity Js Start <<//
        $(".quantity").on("click", ".plus", function(e) {
            let $input = $(this).prev("input.qty");
            let val = parseInt($input.val(), 10); // Specify base 10
            $input.val(val + 1).change();
        });

        $(".quantity").on("click", ".minus", function(e) {
            let $input = $(this).next("input.qty");
            let val = parseInt($input.val(), 10); // Specify base 10
            if (val > 0) {
                $input.val(val - 1).change();
            }
        });

        //>> Quantity Cart Js Start <<//
        const quantity = 0;
        const price = 0;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        $(".total-price, .product-pri").html(price.toFixed(2));
        $(".cart-increment, .cart-incre").on("click", function() {
            if (quantity <= 4) {
                quantity++;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-decrement, .cart-decre").on("click", function() {
            if (quantity >= 1) {
                quantity--;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-item-remove>a").on("click", function() {
            $(this).closest(".cart-item").hide(300);
        });

        //>> PaymentMethod Js Start <<//
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
        $(".checkout-radio-single").on("click", function() {
            let paymentMethod = $("input[name='pay-method']:checked").val();
            $(".payment").html(paymentMethod);
        });

    }); // End Document Ready Function

    $(function() {

        // Get the form.
        var form = $('#contact-form');
    
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
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
    
                // Set the message text.
                $(formMessages).text(response);
    
                // Clear the form.
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');
    
                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occurred and your message could not be sent.');
                }
            });
        });
    
    });
    

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }
    loader();


})(jQuery); // End jQuery