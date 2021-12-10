$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 200)
    {
      $('.to-up').fadeIn();
      $('.to-upSmall').fadeIn();
    } else
    {
        $('.to-up').fadeOut();
        $('.to-upSmall').fadeOut();
      }
    });
    $('.to-up').click(function() {
      $('body,html').animate({scrollTop:0},800);
      return false;
    });
    $('.to-upSmall').click(function() {
      $('body,html').animate({scrollTop:0},800);
      return false;
    });
});

var faq = document.getElementsByClassName("AQP");
var i;
for (i = 0; i < faq.length; i++)
{
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var body = this.nextElementSibling;
    if (body.style.display === "block")
    {
      body.style.display = "none";
    } else
    {
      body.style.display = "block";
    }
  });
}

var deg = 0;
$(".arrow3").click(function(){
  deg += 180;
  $(this).css({"transform" : "rotate(+"+deg+"deg)"})
})

var deg1 = 0;
$(".arrow1").click(function(){
  deg1 += 180;
  $(this).css({"transform" : "rotate(+"+deg1+"deg)"})
})

var deg2 = 0;
$(".arrow2").click(function(){
  deg2 += 180;
  $(this).css({"transform" : "rotate(+"+deg2+"deg)"})
})


$('.expose').click(function(e){
    $(this).css('z-index','1');
    $('#overlay').fadeIn(500);
});

$('#overlay').click(function(e){
    $('#overlay').fadeOut(500, function(){
        $('.expose').css('z-index','1');
    });
});

$('.expose1').click(function(e){
    $(this).css('z-index','1');
    $('#overlay1').fadeIn(500);
});

$('#close').click(function(e){
    $('#overlay1').fadeOut(500, function(){
        $('.overlay1').css('z-index','1');
    });
});

$('#close1').click(function(e){
    $('#overlay1').fadeOut(500, function(){
        $('.overlay1').css('z-index','1');
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
