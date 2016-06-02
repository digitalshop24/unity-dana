
$('.bookCarousel').slick({
  autoplay:true,
  centerPadding: '60px',
  slidesToShow: 7,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('.typeCarousel').slick({
  centerPadding: '60px',
  slidesToShow: 7,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


  $(window).bind('scroll', function() {
        var navHeight = $(window).height();
        if ($(window).scrollTop()== 0)  {
            $('.halfNav').addClass('vv');
            $('.allNav').removeClass('vv');
            $('.navbar-brand img').css("width","77%");
            $('.allNav').css("margin-top","30px");
            $('.cartScroll').css("display","none");
            $('.allNav').css("top","0");

        }else  {
        	$('.allNav').css("margin-top","0px");
          $('.allNav').css("top","0");
          $('.navbar-brand img').css("width","72%");
        	$('.allNav').addClass('vv');
			    $('.halfNav').removeClass('vv');
          $('.cartScroll').css("display","block");

        }
    });