$(document).ready(function() {
    $(".responsive").slick({
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 962,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});