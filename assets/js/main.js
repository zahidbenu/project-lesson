$(document).ready(function() {
  // Main menu
  var currentUrl = window.location.href;

  $('nav ul li a').each(function () {
      if (this.href === currentUrl) {
          $(this).addClass('active-item');
      }
  });

   $('.mobile-menu-toggle ul li a').each(function () {
      if (this.href === currentUrl) {
          $(this).addClass('active-mobile-item');
      }
  });

  // Mobile menu

  $('#mobileToggle').click(function() {
    $('#mobileMenuToggle').slideToggle(300);
  });

  $('.mobile-menu-close').click(function() {
    $('#mobileMenuToggle').slideUp(300);
  });

  //Course animation

  $(document).ready(function () {
    const boxHeight = $('.single-highlight-box').outerHeight();
    const $list = $('.highlight-track');

    function smoothLoop() {
      const $firstItem = $list.children().first();

      $list.animate(
        { top: -boxHeight + 'px' },
        1000,
        'swing',
        function () {
          $list.append($firstItem); 
          $list.css('top', '13px'); 
        }
      );
    }

    setInterval(smoothLoop, 3000);
  });

  // Hero video popup
    
  $('#playButton').on('click', function () {
    $('#videoPopup').fadeIn(300).addClass('popup-visible');

    if ($('.videoFrame').children('iframe').length === 0) {
      $('.videoFrame').html(`
        <iframe width="100%" height="100%" 
          src="https://www.youtube.com/embed/GxmfcnU3feo?si=3bx-k3Bf7x_YiYC6&autoplay=1&rel=0&showinfo=0" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      `);
    }
  });

  $('#closeBtn, #videoPopup').on('click', function (e) {
    if ($(e.target).closest('.videoFrame').length === 0 || $(e.target).is('#closeBtn')) {
      $('#videoPopup').fadeOut(300, function () {
        $('.videoFrame').html(''); // stop video
      });
    }
  });

  // === Feature course slider
  $('.course-slider-wrapper').slick({
      dots: false,
      arrows:true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.mm-slick-prev'),
      nextArrow: $('.mm-slick-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });

  $('.slider-nav .mm-slick-prev').click(function() {
    $(this).addClass('active');
    $('.slider-nav .mm-slick-prev svg').addClass('active-svg');

    $('.slider-nav .mm-slick-next').removeClass('active');
    $('.slider-nav .mm-slick-next svg').removeClass('active-svg');
  });

  $('.slider-nav .mm-slick-next').click(function() {
    $(this).addClass('active');
    $('.slider-nav .mm-slick-next svg').addClass('active-svg');
    
    $('.slider-nav .mm-slick-prev').removeClass('active');
    $('.slider-nav .mm-slick-prev svg').removeClass('active-svg');
  });

  // === Testimonial slider

  $('.testimonial-slider').slick({
      dots: true,
      arrows:false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: $('.nav-dots-wrapper'),
      customPaging: function(slider, i) {
        return '<button class="custom-dot">' + (i + 1) + '</button>';
      }
  });

  // === Blog slider
  $('.blog-slider-wrapper').slick({
      dots: true,
      arrows:false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendDots: $('.blog-nav-dots-wrapper'),
      customPaging: function(slider, i) {
        return '<button class="custom-dot">' + (i + 1) + '</button>';
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });
});