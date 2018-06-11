$(function() {

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
	
});
