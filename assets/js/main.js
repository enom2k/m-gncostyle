$(function () {
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  const body = document.querySelector('body');
  let scrollPosition = 0;

  //body fixed
  function enable() {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
  }

  function disable() {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  }
});



$(window).scroll(function () {
  const currentScroll = $(this).scrollTop();
  const stickyNav = $('.sticky-nav').offset().top;

  if (currentScroll >= stickyNav) {
    $('.sticky-nav').addClass('fixed');
  } else {
    $('.sticky-nav').removeClass('fixed');
  }
});

// gnb
$('#gnb .link-gnb').click(function (e) {
  e.preventDefault();
  $('#gnb .link-gnb').removeClass('active');
  $(this).addClass('active');
});


  // floating-nav
  let lastScroll = 0;
  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();
    if (currentScroll > lastScroll) {
      $('.floating-nav').addClass('on');
    } else {
      $('.floating-nav').removeClass('on');
    }
    lastScroll = currentScroll;

    if (currentScroll > 500) {
      $('.floating-nav .link-history').addClass('active');
      gsap.to('.floating-nav .btn-top', {
        display: 'block',
        duration: 0,
      })
    } else {
      $('.floating-nav .link-history').removeClass('active');
      gsap.to('.floating-nav .btn-top', {
        display: 'none',
        duration: 0,
      })
    }
  });

  // btn-top
  $('.floating-nav .btn-top').click(function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: '0'
    }, 500);
  });

 

const gnbSwiper = new Swiper('#gnb .swiper', {
  slidesPerView: 'auto'
});

new Swiper(".visual-swiper", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".visual-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".visual-btn-next",
    prevEl: ".visual-btn-prev",
  },
});

new Swiper(".bestItem-swiper", {
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".bestItem-swiper-pagination",
    clickable: true,
  },
});

new Swiper(".likeSwiper", {
  slidesPerView: 'auto',
});

new Swiper(".issueSwiper", {
  loop: false,
  slidesPerView: 'auto',
});



const brandbullet = ['Thursday Island', 'T.I FOR MEN', 'COVETBLAN', 'ETAPE'];
  const brandSwiper = new Swiper('.brand-wrap .swiper', {
    // autoplay: {
    //   delay: 5000,
    // },
    loop: true,
    speed: 500,
    autoHeight: true,
    centeredSlides: false,
    pagination: {
      el: '.brand-wrap .category-area',
      clickable: true,
      bulletClass: 'btn-category',
      bulletActiveClass: 'active',
      bulletElement: 'a',
      renderBullet: function (index, className) {
        return '<a href="#" class="' + className + '" role="tab">' + '<span>' + (brandbullet[index]) + '</span>' + '</a>';
      }
    },
  });





  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear();
  
  
  



