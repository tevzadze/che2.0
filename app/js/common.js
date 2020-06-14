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
    $('.customPrevBtntwo').click(function() {
        owl2.trigger('prev.owl.carousel', [300]);
    })

    $('.more-info').on('mouseenter', function() {
        $(this).addClass('hovered')
    });
    $('.more-info').on('mouseleave', function() {
        $(this).removeClass('hovered')
    })


    //operations 


    

    var sidebar = document.querySelector('.sidebar')
    var rightOperations = document.querySelector('.operations-right')
    var sidebarLenght = $('.sidebar')

    if (sidebarLenght.length != 0) {
        this.onscroll = function() {
        var domRect = rightOperations.getBoundingClientRect();
        var spaceBelow = domRect.top

        if (spaceBelow < 250) {
            sidebar.classList.add('fixed');
        } else {
            sidebar.classList.remove('fixed');
        }
        var currentOperation = document.querySelectorAll('.operation')
        currentOperation.forEach(function(item, i, arr) {
            var topRect = currentOperation[i].getBoundingClientRect()
            var topBelow = topRect.top
            var itemHeight = currentOperation[i].offsetHeight
            var trueHeight = itemHeight + 200
            var currentTitle = document.querySelectorAll('.sidebartitles')
            // console.log(topBelow)
            if (topBelow > 100 && topBelow < trueHeight) {
                currentTitle[i].classList.add('active')
            } else if (topBelow > trueHeight || topBelow < 100) {
                currentTitle[i].classList.remove('active')
            }
        })
    };
    }
    
    $('.sidebartitles').mPageScroll2id();


    //popup online consultation
    $('.online-button, .back').on('click', function () {
        event.preventDefault();
        $('.popup-form').toggleClass('active');
    })


    $('.form-button, .pathology').mPageScroll2id({ 
        offset: 200,
        scrollSpeed: 900 
    });
    $('.operations .operation').on('click', function () {

        $(this).toggleClass('active')
    });

    $('.close-menu , .mobile-menu a').on('click', function () {
        $('.mobile-menu').toggleClass('active');
        $('.close-menu').toggleClass('active');
    });
});