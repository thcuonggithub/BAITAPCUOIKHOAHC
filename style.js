$(document).ready(function() {
    $(".product-item").slick({
        slidesToShow:4,
        SlidesToScroll:2,
        infinite:true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
    });
});

$(document).ready(function() {
    $(".thumb").slick({
        slidesToShow:1,
        SlidesToScroll:2,
        infinite:true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 30000,
        // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
    });
});

