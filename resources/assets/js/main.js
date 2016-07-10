window.$ = window.jQuery = require('jquery')
require('bootstrap-sass');
require('smoothscroll-for-websites');
var wow = require('wowjs');

$( document ).ready(function() {

    var wowAgent = new wow.WOW();
    wowAgent.init();

    $("#circle-graph-java").circliful({
        animationStep: 5,
        foregroundBorderWidth: 1,
        backgroundBorderWidth: 1,
        backgroundColor: '#666666',
        foregroundColor: '#FFFFFF',
        percent: 90
    });

    $("#circle-graph-html").circliful({
        animationStep: 5,
        foregroundBorderWidth: 1,
        backgroundBorderWidth: 1,
        backgroundColor: '#666666',
        foregroundColor: '#FFFFFF',
        percent: 90
    });

    $("#circle-graph-css").circliful({
        animationStep: 5,
        foregroundBorderWidth: 1,
        backgroundBorderWidth: 1,
        backgroundColor: '#666666',
        foregroundColor: '#FFFFFF',
        percent: 90
    });

    $("#circle-graph-js").circliful({
        animationStep: 5,
        foregroundBorderWidth: 1,
        backgroundBorderWidth: 1,
        backgroundColor: '#666666',
        foregroundColor: '#FFFFFF',
        percent: 75
    });

    $("#circle-graph-php").circliful({
        animationStep: 5,
        foregroundBorderWidth: 1,
        backgroundBorderWidth: 1,
        backgroundColor: '#666666',
        foregroundColor: '#FFFFFF',
        percent: 50
    });

    $("#circle-graph-cplusplus").circliful({
        animationStep: 5,
        foregroundBorderWidth: 1,
        backgroundBorderWidth: 1,
        backgroundColor: '#666666',
        foregroundColor: '#FFFFFF',
        percent: 50
    });


    $("#circle-graph-csharp").circliful({
        animationStep: 5,
        foregroundBorderWidth: 1,
        backgroundBorderWidth: 1,
        backgroundColor: '#666666',
        foregroundColor: '#FFFFFF',
        percent: 50
    });


    $.stellar({
        // Set scrolling to be in either one or both directions
        horizontalScrolling: true,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: true,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'position',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: false,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: true
    });

    $("#test-circle").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 75,
        foregroundColor: '#FFFFFF',
        backgroundColor: 'none'
    });

    $("#test-circle2").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 75,
        foregroundColor: '#FFFFFF',
        backgroundColor: 'none'
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



