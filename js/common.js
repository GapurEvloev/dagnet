var moving = false;
var slideWidth = $(".slide").width();

function moveLeft() {
  if (moving == false) {
    moving = true;
    var currentSlide = $(".active");
    var prevSlide = currentSlide.prev();
    if (currentSlide.index() == 0) {
      prevSlide = $(".slide").last();
    }
    currentSlide.toggleClass("active");
    currentSlide.toggleClass("second-active");
    prevSlide.css("left", -slideWidth);
    prevSlide.toggleClass("active");
    currentSlide.animate({
      left: "+=" + slideWidth,
    }, 1000, function() {
      currentSlide.toggleClass("second-active");
    });
    prevSlide.animate({
      left: "+=" + slideWidth,
    }, 1000, function() {
      moving = false;
    });
  }
}

function moveRight() {
  if (moving == false) {
    moving = true;
    var currentSlide = $(".active");
    var nextSlide = currentSlide.next();
    if (currentSlide.index() + 1 == $(".slide").size()) {
      nextSlide = $(".slide").first();
    }
    currentSlide.toggleClass("active");
    currentSlide.toggleClass("second-active");
    nextSlide.css("left", slideWidth);
    nextSlide.toggleClass("active");
    currentSlide.animate({
      left: "-=" + slideWidth,
    }, 1000, function() {
      currentSlide.toggleClass("second-active");
    });
    nextSlide.animate({
      left: "-=" + slideWidth,
    }, 1000, function() {
      moving = false;
    });
  }
}

$(".left-arrow").click(moveLeft);

$(".right-arrow").click(moveRight);

var timer = setInterval(moveRight, 400000);
$(function() {







	$('#menu-toggle').on('click', function(item) {
		$('div#menu-toggle').toggleClass('uncollapse');
		$('#menu').toggleClass('show');
	});

	$('li').on('click', function(e) {

	});

	$(function(){
		$('.accordion-toggle .accordion-link').click(function(){
			if(!$(this).hasClass('accordion-on'))
				$('.accordion-toggle .accordion-link').removeClass('accordion-on');
			$(this).toggleClass('accordion-on');
			$(this).next(".accordion-panel").slideToggle().siblings(".accordion-panel:visible").slideToggle();
		})
	});

	$('.menu-btn').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('menu-btn_active');
	});

	$(document).ready(function() {

		var $toggleButton = $('.toggle-button'),
		$menuWrap = $('.menu-wrap'),
		$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});

});
});
