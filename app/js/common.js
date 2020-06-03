$(function() {
    var owl = $('.carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
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
        items: 1,
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
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

    $('.more-info').on('mouseenter', function() {
        $(this).addClass('hovered')
    });
    $('.more-info').on('mouseleave', function() {
        $(this).removeClass('hovered')
    })

    var sidebar = document.querySelector('.sidebar')
    var rightOperations = document.querySelector('.operations-right')
    // var sidebarTitle = document.querySelector('.sidebar-title')
    // console.log(sidebar)
    this.onscroll = function() {
        var domRect = rightOperations.getBoundingClientRect();
        var spaceBelow = domRect.top
        console.log(spaceBelow)

        if (spaceBelow < 250) {
            sidebar.classList.add('fixed');
            // sidebarTitle.classList.add('fixed');
        } else {
            sidebar.classList.remove('fixed');
            // sidebarTitle.classList.remove('fixed');
        }
    };


});