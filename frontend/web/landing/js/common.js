$(document).ready(function() {

 // инициализируем wow.js (Раскоментить если надо wow.js)
  // if ($(window).width() > 1000) {
  //   wow = new WOW(
  //     {
  //       animateClass: 'animated',
  //       offset:       100
  //     }
  //   );
  //   wow.init();
  // }

});
// cookie script
	 function getCookie(cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for(var i=0; i<ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0)==' ') c = c.substring(1);
              if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
          }
          return "";
      }

      function setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          var expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
      }


      function clearF1Cookie() {
          setCookie("name","",-1);
          setCookie("email","",-1);
          setCookie("last1","",-1);
      }
      $(window).load(function() {
          $("input.name").val(getCookie("name"));
          $("input.email").val(getCookie("email"));
          $("input.phone").val(getCookie("phone"));
          $("input.phone1").val(getCookie("phone1"));
          $("input.phone2").val(getCookie("phone2"));
          $("input.phone3").val(getCookie("phone3"));
      });

  $('.btn-anchor').on('click', function(e) {
    e.preventDefault();
    anchorScroller(this, 1500);
  });


  $('.sec2 .tab-title').on('click', function(e){
    e.preventDefault();
    var target =$(this).data('target');
    var zp =$(this).data('zp');
    console.log(target);
    console.log(zp);
    $('.sec2 .tab-title, .tabs-content .active, .zp-block .active').removeClass('active');
    $(this).addClass('active');
    $('.tabs-content').find('.' + target).addClass('active');
    $('.zp-block').find('.' + zp).addClass('active');
  });

  $('.program-navigation .tab-link').on('click', function(e){
    e.preventDefault();
    $('.program-navigation .tab-link').removeClass('active');
    $(this).addClass('active');
    var target = $(this).data('target');
    $('.modules .module.active').removeClass('active');
    $('.modules').find('.'+target).addClass('active');
  });

  $('.question-block .icon').on('click', function(){
    var target = $(this).closest('.question-block');
    target.toggleClass('active');
    target.find('.answer').slideToggle();
  });

  $('.sec6 .slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });

  $('.sec7 .speakers').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.videreviews-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#playFon').on('click', function(){
    $(this).fadeOut();
    $('#mute').fadeIn();
    $('video.video').attr('src', 'school3sezon.mp4');
  });

  $("video").prop('muted', false);

  $("#mute").click( function (){
    $(this).toggleClass('muted');
    if( $("video.video").prop('muted') ) {
          $("video").prop('muted', false);
    } else {
      $("video.video").prop('muted', true);
    }
  });