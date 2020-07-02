$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 7500,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    ///////// **Cats Slider** /////////
    var catsswiper = new Swiper('.cats-slider.swiper-container', {
        spaceBetween: 19,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 22,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
            1500: {
                slidesPerView: 8,
            },
        },
    });
    ///////// **product Slider** /////////
    var topViewswiper = new Swiper('.topView.swiper-container', {
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 14,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    var sugesstswiper = new Swiper('.sugesst.swiper-container', {
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 14,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    var latestswiper = new Swiper('.latest.swiper-container', {
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 14,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    var offersswiper = new Swiper('.offers.swiper-container', {
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 14,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1500: {
                slidesPerView: 6,
            },
        },
    });
    ///////// **ACC** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
    ///////// **search btn** /////////
    if ($(window).width() <= 1199) {
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }
    ///////// **menu** /////////
    if ($(window).width() > 1200) {
        $(".drop-link .nav-a").removeAttr("href");
        $(".drop-link .sub-ul").removeClass("collapse");
    }
    if ($(window).width() <= 1199) {
        $(".drop-link .sub-ul").unwrap();
    }

    $('.sub-ul').on('show.bs.collapse', function () {
        $(".sub-ul").not(this).collapse('hide');
        $(".sub-ul").parents(".drop-link").addClass('acc-active');
        $(".sub-ul").not(this).parents(".drop-link").removeClass('acc-active');
    });
    $('.sub-ul').on('hide.bs.collapse', function () {
        $(this).parents(".drop-link").removeClass('acc-active');
    });

    $('.mo-menu-icon').click(function () {
        $(".menu-overlay").fadeIn(400);
        $("nav").addClass("nav-in");
        $("body").addClass("overflow");
    });
    $('.menu-overlay').click(function () {
        $(".menu-overlay").fadeOut(400);
        $("nav").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.menu-close').click(function () {
        $(".menu-overlay").fadeOut(400);
        $("nav").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.curr .top-anchor').click(function () {
        $(".top-dropdown").slideToggle(400);
    });
});