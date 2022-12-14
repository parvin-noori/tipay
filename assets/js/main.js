$(document).ready(function () {
    var swiper = new Swiper(".swiper-container1", {
        loop: true,
        autoplay: true,
    });
    var swiper2 = new Swiper(".swiper-container2", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper3 = new Swiper(".swiper-container3", {
        loop: true,
        // slidesPerView: 5,
        breakpoints: {
            '@0.00': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            '@1.50': {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        }
    });
    var swiper4 = new Swiper(".swiper-container4", {
        // slidesPerView: 5,
        breakpoints: {
            '@0.00': {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            '@1.00': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '@1.50': {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });
    var swiper5 = new Swiper(".swiper-container5", {
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '@1.00': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '@1.50': {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });
    var swiper6= new Swiper(".swiper-container6", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            '@0.00': {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            '@0.75': {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            '@1.00': {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            '@1.50': {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        }
    });

    //humburger menu
    $(".mega-menu-responsive").on("click", function () {
        $('.mega-menu-site-responsive').addClass('active')

    })

    //close responsive menu
    $(".mega-menu-site-responsive .close").on("click", function () {
        $('.mega-menu-site-responsive').removeClass('active')

    })

    //change width of search bar
    let headerSearchBar = $('.header-search-bar')
    headerSearchBar.on("click", function () {
        $(this).toggleClass("active");
        $('.header-search-bar input').focus();
    });
    $(document).mouseup(e => {
        if (!headerSearchBar.is(e.target)
            && headerSearchBar.has(e.target).length === 0) {
            headerSearchBar.removeClass('active');
        }
    })

//open/close select tag
    $('.blog__selected-item').click(function () {
        $(this).toggleClass('blog__active')
        if ($(this).hasClass('blog__active'))
            $(this).closest(".blog__selected-item-main").find('.blog__select-list').css({'max-height':'40rem','visibility':'visible','padding-bottom':'19px'});
        else
            $(this).closest(".blog__selected-item-main").find('.blog__select-list').css({'max-height':'0','visibility':'hidden','padding-bottom':'0'});
    });

})

AOS.init();

feather.replace();

//why tpay
$('.why-tpay__main').on('mouseover', '.why-tpay__item', function () {
    $('.why-tpay__item.active').removeClass('active');
    $(this).addClass('active');
});

//social network
$('.site-footer__social').on('mouseover', 'li', function () {
    $('li.active').removeClass('active');
    $(this).addClass('active');
});


//accordion why-tpay-service
$('.why-tpay-service__questions .accordion-item').click(function (event) {
    $(this).toggleClass('active')
})

//change position of tooltip
var $window = $(window),
    toolTip = $('.tool-tip'),
    servicesUs = $('.services-us')
elTop = toolTip.offset().top;
$window.scroll(function () {
    toolTip.toggleClass('tool-tip__active', $window.scrollTop() >= elTop);
});

