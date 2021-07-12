$(document).ready(function() {

  $('.slick-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 800,
    });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});

//funkcija();

/*function funkcija() {
  alert('Labas lietuva!');
}*/


document.getElementById('atidarymoNuoroda').onclick = function() {

  var langas = document.getElementById('offcanvasAtidarymas');
  
  //Funkcija contains grazina reiksme true arba false
  if( langas.classList.contains('open') == false ) {
    langas.classList.add('open');   
  } else {
    langas.classList.remove('open');
  }

  return false;

};

jQuery(document).ready(function() {

  jQuery('#sutinku').on('click',function() {
    jQuery(this).parent().slideUp(500);
  });

  jQuery('#rodytiBaneri').on('click', function() {
    jQuery('#slapukai').slideDown(500);

    return false;
  });

});

// ---------------
$(".escape").click(function(e){
  e.preventDefault();
  $(".moveOnClick").animate({
    with: "50%",
    right:"70%"}, 
    5000, function() {
  })
  $("#escape").animate ({
    opacity: 0
    },
    5000, function() {
  });
});

$(".fly").click(function(){
  $("#fly").animate ({
    left: "800px",
    opacity: 0
    },   
    5000, function() {
  });
});

$('.adv-list-item').click(function(){
  $('.video-link').trigger('click');
});

