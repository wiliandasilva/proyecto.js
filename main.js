$('h1').append("<span>Zona Gamer</span>");

$('span').fadeOut(2000, function () {
    $('span').fadeIn(2000);
  });

$('.foto1').animate({ 
    width: '70%',
    height: '300px'},
    "slow")
    .delay(3000)
    .animate({
        width: '100%',
        height: '450px'},
        "slow")
      
