$(function(){

    $(".product__item-star").rateYo({
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
        max: 1000,
        from: 200,
        to: 500,
        grid: true
    });
    

   var mixer = mixitup('.products__inner-box');
    
});


