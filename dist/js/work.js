$('.about-content').hide();
$('.work-content').hide();
$('.contact-content').hide();

var projectTitle = document.getElementById('pTitle');
var projectDesc = document.getElementById('pDesc');


/* ==========================================================================
DEFAULT WORK SETTING -1ST ANIMATION
========================================================================== */


$('.demo-container-4').fadeIn();
$('.demo-container-5').fadeIn();
$('.demo-container-6').hide();
$('.demo-container-7').hide();
$('.demo-container-8').hide();
$('.demo-container-9').hide();
$('.demo-container-10').hide();
$('.demo-container-11').hide();


/* ==========================================================================
PORTFOLIO ITEM 1
========================================================================== */


$('.demo-container-4').removeClass('moveD');
$('.demo-container-5').removeClass('moveU');

  $('#demo-1').click(function() {
    projectTitle.innerHTML = "Alursita";
    projectDesc.innerHTML = "Alursita";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-4').fadeIn();
    $('.demo-container-5').fadeIn();
    $('.demo-container-6').hide();
    $('.demo-container-7').hide();
    $('.demo-container-8').hide();
    $('.demo-container-9').hide();
    $('.demo-container-10').hide();
    $('.demo-container-11').hide();
    $('.intro-msg').hide();
    $('.title').hide();
  });


$('#demo-1').click(function() {
    $('.demo-container-4').removeClass('moveD');
    $('.demo-container-5').removeClass('moveU');
});

$('#demo-5').click(function() {
    projectTitle.innerHTML = "Alursita";
    projectDesc.innerHTML = "Revista digital y blog de gastronomia y viajes";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-4').fadeIn();
    $('.demo-container-5').fadeIn();
    $('.demo-container-6').hide();
    $('.demo-container-7').hide();
    $('.demo-container-8').hide();
    $('.demo-container-9').hide();
    $('.demo-container-10').hide();
    $('.demo-container-11').hide();
    $('.intro-msg').hide();
    $('.title').hide();
  });

$('#demo-5').click(function() {
        $('.demo-container-4').removeClass('moveD');
        $('.demo-container-5').removeClass('moveU');
    });


/* ==========================================================================
PORTFOLIO ITEM 2
========================================================================== */


  $('#demo-2').click(function() {
    projectTitle.innerHTML = "Notaría 49";
    projectDesc.innerHTML = "Sitio oficial de la Notaría 49 en la Ciudad de México.";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-3').hide();
    $('.demo-container-4').hide();
    $('.demo-container-5').hide();
    $('.demo-container-6').fadeIn();
    $('.demo-container-7').fadeIn();
    $('.demo-container-8').hide();
    $('.demo-container-9').hide();
    $('.demo-container-10').hide();
    $('.demo-container-11').hide();
    $('.intro-msg').hide();
    $('.title').hide();
  });
$('#demo-2').click(function() {
    $('.demo-container-6').removeClass('moveD');
    $('.demo-container-7').removeClass('moveU');
});

$('#demo-6').click(function() {
    projectTitle.innerHTML = "Notaría 49";
    projectDesc.innerHTML = "Sitio oficial de la Notaría 49 en la Ciudad de México.";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-3').hide();
    $('.demo-container-4').hide();
    $('.demo-container-5').hide();
    $('.demo-container-6').fadeIn();
    $('.demo-container-7').fadeIn();
    $('.demo-container-8').hide();
    $('.demo-container-9').hide();
    $('.demo-container-10').hide();
    $('.demo-container-11').hide();
    $('.intro-msg').hide();
    $('.title').hide();
  });
$('#demo-6').click(function() {
    $('.demo-container-6').removeClass('moveD');
    $('.demo-container-7').removeClass('moveU');
});


/* ==========================================================================
PORTFOLIO ITEM 3
========================================================================== */


  $('#demo-3').click(function() {
    projectTitle.innerHTML = "LuisDa Photography";
    projectDesc.innerHTML = "LuisDa Photography";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-3').hide();
    $('.demo-container-4').hide();
    $('.demo-container-5').hide();
    $('.demo-container-6').hide();
    $('.demo-container-7').hide();
    $('.demo-container-8').hide();
    $('.demo-container-9').fadeIn();
    $('.demo-container-10').hide();
    $('.demo-container-11').hide();
    $('.intro-msg').hide();
    $('.title').hide();
  });
$('#demo-3').click(function() {
    $('.demo-container-8').removeClass('moveD');
    $('.demo-container-9').removeClass('moveU');
});

$('#demo-7').click(function() {
    projectTitle.innerHTML = "LuisDa Photography";
    projectDesc.innerHTML = "Portfolio digital y trabajo fotografico.";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-3').hide();
    $('.demo-container-4').hide();
    $('.demo-container-5').hide();
    $('.demo-container-6').hide();
    $('.demo-container-7').hide();
    $('.demo-container-8').hide();
    $('.demo-container-9').fadeIn();
    $('.demo-container-10').hide();
    $('.demo-container-11').hide();
    $('.intro-msg').hide();
    $('.title').hide();
  });
$('#demo-7').click(function() {
    $('.demo-container-8').removeClass('moveD');
    $('.demo-container-9').removeClass('moveU');
});


/* ==========================================================================
PORTFOLIO ITEM 4
========================================================================== */


  $('#demo-4').click(function() {
    projectTitle.innerHTML = "IncreibleTV";
    projectDesc.innerHTML = "IncreibleTV";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-3').hide();
    $('.demo-container-4').hide();
    $('.demo-container-5').hide();
    $('.demo-container-6').hide();
    $('.demo-container-7').hide();
    $('.demo-container-8').hide();
    $('.demo-container-9').hide();
    $('.demo-container-10').hide();
    $('.demo-container-11').fadeIn();
    $('.intro-msg').hide();
    $('.title').hide();
  });
$('#demo-4').click(function() {
    $('.demo-container-10').removeClass('moveD');
    $('.demo-container-11').removeClass('moveU');
});

$('#demo-8').click(function() {
    projectTitle.innerHTML = "IncreibleTV";
    projectDesc.innerHTML = "Sitio dedicado a la creación de contenido por IncreibleTv";
    $('.demo-container-1').hide();
    $('.demo-container-2').hide();
    $('.demo-container-3').hide();
    $('.demo-container-4').hide();
    $('.demo-container-5').hide();
    $('.demo-container-6').hide();
    $('.demo-container-7').hide();
    $('.demo-container-8').hide();
    $('.demo-container-9').hide();
    $('.demo-container-10').hide();
    $('.demo-container-11').fadeIn();
    $('.intro-msg').hide();
    $('.title').hide();
  });
$('#demo-8').click(function() {
    $('.demo-container-10').removeClass('moveD');
    $('.demo-container-11').removeClass('moveU');
});

$('.demo-container-3').hide();


/* ==========================================================================
DESKTOP
========================================================================== */


$('#home').click(function(){
      $('.home-content').show();
      $('.about-content').hide();
      $('.work-content').hide();
      $('.contact-content').hide();
      $('.main-content').removeClass('blue');
      $('.main-content').removeClass('orange');
      $('.main-content').removeClass('yellow');
      $('.main-content').removeClass('green');
 });

$('#about').click(function(){
      $('.about-content').show();
      $('.home-content').hide();
      $('.work-content').hide();
      $('.contact-content').hide();
      $('.main-content').removeClass('blue');
      $('.main-content').removeClass('orange');
      $('.main-content').removeClass('yellow');
      $('.main-content').removeClass('green');
 });

 $('#work').click(function(){
      $('.work-content').show();
      $('.home-content').hide();
      $('.contact-content').hide();
      $('.about-content').hide();
 });

 $('#contact').click(function(){
      $('.contact-content').show();
      $('.home-content').hide();
      $('.work-content').hide();
      $('.about-content').hide();
      $('.main-content').removeClass('blue');
      $('.main-content').removeClass('orange');
      $('.main-content').removeClass('yellow');
      $('.main-content').removeClass('green');
 });


/* ==========================================================================
MOBILE
========================================================================== */


$('#home-m').click(function(){
      $('.home-content').show();
      $('.about-content').hide();
      $('.work-content').hide();
      $('.contact-content').hide();
      $('.main-content').removeClass('blue');
      $('.main-content').removeClass('orange');
      $('.main-content').removeClass('yellow');
      $('.main-content').removeClass('green');
 });

$('#about-m').click(function(){
      $('.about-content').show();
      $('.home-content').hide();
      $('.work-content').hide();
      $('.contact-content').hide();
      $('.main-content').removeClass('blue');
      $('.main-content').removeClass('orange');
      $('.main-content').removeClass('yellow');
      $('.main-content').removeClass('green');
 });

 $('#work-m').click(function(){
      $('.work-content').show();
      $('.home-content').hide();
      $('.contact-content').hide();
      $('.about-content').hide();
      $('.main-content').removeClass('blue');
      $('.main-content').removeClass('orange');
      $('.main-content').removeClass('yellow');
      $('.main-content').removeClass('green');
 });

 $('#contact-m').click(function(){
      $('.contact-content').show();
      $('.home-content').hide();
      $('.work-content').hide();
      $('.about-content').hide();
      $('.main-content').removeClass('blue');
      $('.main-content').removeClass('orange');
      $('.main-content').removeClass('yellow');
      $('.main-content').removeClass('green');
 });



 $('.burger-menu').click(function(){
      $('.mobile-menu-link').toggleClass("hide");
      $('.line-2').toggleClass("expand");
 });



  $('#process').click(function(){
      var $this = $(this);
      $('.work-content').toggleClass("process-sample-on");
      if($this.hasClass('process-sample-on')){
      $this.text('Work');
    } else {
        $this.text('Process');
    }
 });

  $('#process').click(function(){
       if($(this).is(':visible')){
            $('.work-sample-1').css("background", "red");
        } else {
            $('.work-sample-1').css("background", "yellow");
        }
 });


  $('#process').click(function(){
       if($('.work-content').hasClass('process-sample-on')){
            $('.work-sample-1').css("background", "red");
            $('.work-sample-2').css("background", "red");
            $('.work-sample-3').css("background", "red");
            $('.work-sample-4').css("background", "red");
            $('.work-sample-5').css("background", "red");
            $('.work-sample-6').css("background", "red");
            $('.work-sample-7').css("background", "red");
            $('.work-sample-8').css("background", "red");
        } else {
            $('.work-sample-1').css("background", "yellow");
            $('.work-sample-2').css("background", "yellow");
            $('.work-sample-3').css("background", "yellow");
            $('.work-sample-4').css("background", "yellow");
            $('.work-sample-5').css("background", "yellow");
            $('.work-sample-6').css("background", "yellow");
            $('.work-sample-7').css("background", "yellow");
            $('.work-sample-8').css("background", "yellow");
        }
 });


