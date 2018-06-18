$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: false,
        pauseOnHover:false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 1000,
                    pauseOnFocus: false,
                    pauseOnHover:false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                    },
            
            {
                breakpoint: 768,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 1000,
                    pauseOnFocus: false,
                    pauseOnHover:false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
                    },
            {
                breakpoint: 576,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 1000,
                    pauseOnFocus: false,
                    pauseOnHover:false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                    }
                ]
    });
});
