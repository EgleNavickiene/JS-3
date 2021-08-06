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

// Šoninis meniu (offcanvas)------------
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


// Slapukai-----------
jQuery(document).ready(function() {

  jQuery('#sutinku').on('click',function() {
    jQuery(this).parent().slideUp(500);
  });

  jQuery('#rodytiBaneri').on('click', function() {
    jQuery('#slapukai').slideDown(500);

    return false;
  });

});


//--------------window loader
$(window).load(function(){
  $('.window-loader-area').addClass('hidden')
})


// ---------js animacija------
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

// trigeris imituojantis video link'o paspaudimą---
$('.adv-list-item').click(function(){
  $('.video-link').trigger('click');
});   //---------Neveikia...

// scroll to top rodyklė---
jQuery('.gotop').on('click', function(e) {

  e.preventDefault();

  jQuery('html,body').animate({scrollTop: 0}, 'fast');

});

jQuery(window).on('scroll', function() {
  let virsus          = jQuery(document).scrollTop();
  let puslapioAukstis = jQuery(document).height();
  let langoAukstis    = jQuery(window).height();
  let bendras         = virsus + langoAukstis;
  let counterioVirsus = jQuery('.facts-area-row').position().top;
 
  //console.log(virsus);
  //console.log(puslapioAukstis);
  //console.log(langoAukstis);
  ///console.log(bendras);

  if(bendras == puslapioAukstis) {
    //alert('Yra');

    jQuery('.gotop').addClass('show');
  } 

  if(virsus + langoAukstis < puslapioAukstis - 800) {
    jQuery('.gotop').removeClass('show');
  }

  // --- Counter ---
  if(virsus + langoAukstis >= counterioVirsus) {
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
        duration: 4000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          // alert('finished');
        }
      });  
      
    });
  }

});

// --- Užduotis iš paskutinės pamokos: -----------------------------
/* Sugeneruokite 15 eilučių masyvą, kuriame turėtume objektus, kurie nurodytų informaciją sudarytą
 iš trijų reikšmių. Reikšmės ir indeksai turi būti sugeneruoti atsitiktinai. Panaudokite masyvą, 
 kad sugeneruoti lentelę ir ją patalpinkite Mitech pavyzdžio dešinėje pusėje atsidarančiame lange.*/

//funkcijos raidėms ir skaičiams generuoti:---------------
function randomString(length) {

  let randomraides = '';
  let raides = 'abcdefghijklmnopqrstuvwxyz';

  for ( let i = 0; i < length; i++ ) {

      randomraides += raides.charAt( Math.floor( Math.random() * raides.length) );
  }
  return randomraides;
}

function randomSkaicius(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
};
//---------------------------------------------------------

document.querySelector('.appended-text3').innerHTML += 
'<table id="paskutine_lentele" class="Xlentele">' +
  '<thead>' + 
    '<th>Reikšmė1</th>' +
    '<th>Reikšmė2</th>' +
    '<th>Reikšmė3</th>' +
  '</thead>' + 
  '<tbody>' + 
  '</tbody>' +
'</table>';

let paskutine_lentele = document.querySelector('#paskutine_lentele > tbody');

let masyvas0806 =[];

for(let i = 0; i < 15; i++) {

  let objektas = {
      Reikšmė1: randomString(5),
      Reikšmė2: randomString(7),
      Reikšmė3: randomSkaicius(1, 129)
  }

  masyvas0806.push(objektas);
} 

for(let i = 0; i < masyvas0806.length; i++) {
  paskutine_lentele.innerHTML += '<tr><td>' + masyvas0806[i]['Reikšmė1'] + '</td>' +
                                     '<td>' + masyvas0806[i]['Reikšmė2'] + '</td>' +
                                     '<td>' + masyvas0806[i]['Reikšmė3'] + '</td>';
}
//--------------------------------------


