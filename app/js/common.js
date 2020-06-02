$(function() {
	var owl = $('.carousel');
	owl.owlCarousel({
		items:1,
	    loop:true,
	    margin:0,
	    dots:false,
	    nav:false,
	});
	// Go to the next item
	$('.customNextBtn').click(function() {
	    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})

	var owl2 = $('.slidertwo');
	owl2.owlCarousel({
		items:1,
	    loop:true,
	    margin:0,
	    dots:false,
	    nav:false,
	});
	// Go to the next item
	$('.customNextBtntwo').click(function() {
	    owl2.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtntwo').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl2.trigger('prev.owl.carousel', [300]);
	})

	$('.more-info').on('mouseenter', function () {
		$(this).addClass('hovered')
	});
	$('.more-info').on('mouseleave', function () {
		$(this).removeClass('hovered')
	})

});
