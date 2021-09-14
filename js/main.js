//Owl Carosol Functional
$('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:2000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:3
              }
          }
      })

//Tab Section Functional
$(document).ready(function(){
  $(".tc-two").hide();
  $(".tc-three").hide();

  $(".t-one").click(function(){
    $(".tc-one").show();
    $(".tc-two").hide();
    $(".tc-three").hide();
  });

  $(".t-two").click(function(){
    $(".tc-one").hide();
    $(".tc-two").show();
    $(".tc-three").hide();
  });

  $(".t-three").click(function(){
    $(".tc-one").hide();
    $(".tc-two").hide();
    $(".tc-three").show();
  });
});