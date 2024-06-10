$( document ).ready(function() {
                
                $("#actor_scroll").fadeOut();   
                $("#coach_scroll").fadeOut();
				$("#cosplayer_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#actor").click(function(){
                    $("#index").fadeOut();
                    $("#actor_scroll").fadeIn();
                    $('#actor_left').addClass('animated slideInLeft');
                    $('#actor_right').addClass('animated slideInRight');
                    });
                $("#coach").click(function(){
                    $("#index").fadeOut();
                    $("#coach_scroll").fadeIn();
                    $('#coach_left').addClass('animated slideInLeft');
                    $('#coach_right').addClass('animated slideInRight');
                    });
                $("#cosplayer").click(function(){
                    $("#index").fadeOut();
                    $("#cosplayer_scroll").fadeIn();
                    $('#cosplayer_left').addClass('animated slideInLeft');
                    $('#cosplayer_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});
		
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}		