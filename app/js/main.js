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
        centerMode: true,
        appendArrows: ".product-slider__arrows",
        prevArrow: '<button class="product-slider-arrow--left">',
        nextArrow: '<button class="product-slider-arrow--right">'
    });

    $('.weekly__product-slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: ".weekly__product-slider__arrows",
        prevArrow: '<button class="product-slider-arrow--left">',
        nextArrow: '<button class="product-slider-arrow--right">'
     
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
    

   var mixer = mixitup('.products__inner-box');
    
});


