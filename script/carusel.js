$(document).ready(function(){
    $('.avtopark-carusel').slick({
        dots: true,
        centerMode: true,
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        // variableWidth: true,
        prevArrow: '.avtopark-arrow__left',
        nextArrow: '.avtopark-arrow__right',
        responsive:
            [
                {
                    breakpoint: 750,
                    settings: 
                            {
                                variableWidth: true,
                            },
                }
            ]
    });
    $('.review__carusel').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        centerMode: true,
        arrows: true,
        prevArrow: '.review-arrow__left',
        nextArrow: '.review-arrow__right',
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: 
                            {
                              centerMode: true,
                              slidesToShow: 1,
                              variableWidth: true,
                              dots: true,
                            },
                },
            ],
            
    });
});