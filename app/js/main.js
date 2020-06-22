$(function(){

    $(".product__item-star").rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "12px",
        ratedFill: "#ffc000",
        spacing: "5px"
    });

    $(".product-page__item-stars").rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "12px",
        ratedFill: "#ffc000",
        spacing: "5px"
    });

    $(".product-page__item--list-stars").rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "12px",
        ratedFill: "#ffc000",
        spacing: "5px"
    });

    $('.product-slider-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        rows: 1,
        centerMode: true,
        appendArrows: ".product-slider__arrows",
         prevArrow: '<button class="product-slider-arrow--left">',
        nextArrow: '<button class="product-slider-arrow--right">',
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    slidesToShow: 2,
                     slidesToScroll: 2,
                }
            },

            {
                breakpoint: 857,
                settings: {
                    slidesToShow: 1,
                     slidesToScroll: 1,
                }
            },
        ]
    });

    $('.weekly__product-slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: ".weekly__product-slider__arrows",
        prevArrow: '<button class="product-slider-arrow--left">',
        nextArrow: '<button class="product-slider-arrow--right">',
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2,
                     slidesToScroll: 1,
                }
            },

            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                     slidesToScroll: 1,
                     centerMode: true,
                }
            },
        ]
     
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.page-filter-list__btn').on('click',function(){
        $('.product-page__item').addClass('list');
        $('.page-filter-list__btn').addClass('active');
        $('.page-filter-grid__btn').removeClass('active');
        

    });

    $('.page-filter-grid__btn').on('click',function(){
        $('.product-page__item').removeClass('list');
        $('.page-filter-grid__btn').addClass('active');
        $('.page-filter-list__btn').removeClass('active');
    });
    
    $('.menu__btn').on('click', function(){
        $('.header__menu-list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header_user-box').toggleClass('active');
    });

    $('.single-product__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.single-product__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
        

   var mixer = mixitup('.products__inner-box');
    
});


