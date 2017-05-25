// iScroll
function isPassive() {
    var supportsPassiveOption = false;
    try {
        addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassiveOption = true;
            }
        }));
    } catch (e) {}
    return supportsPassiveOption;
}

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, isPassive() ? {
    capture: false,
    passive: false
} : false);

var mainScroll;
var bottomModalScroll;

function loaded() {

    mainScroll = new IScroll('.main', {
        scrollbars: 'custom',
        fadeScrollbars: true,
        shrinkScrollbars: 'scale',
        click: true,
        tap: true
    });

    if (document.querySelector(".bottom-modal-scroll")) {
        bottomModalScroll = new IScroll('.bottom-modal-scroll', {
            scrollbars: 'custom',
            fadeScrollbars: true,
            shrinkScrollbars: 'scale',
            click: true,
            tap: true
        });
    }

}


// waves
Waves.displayEffect();

// delayed spik
function delayedSpik() {

    var href = [];

    $("[data-href]").each(function(i) {
        href[i] = $(this).data('href');
        if ($(this).hasClass('waves-effect')) {
            $(this).bind("click", function() {
                window.setTimeout(function() {
                    location.href = href[i];
                }, 300);
            });
        } else {
            $(this).bind("click", function() {
                location.href = href[i];
            });
        }
    });

};
delayedSpik();

// jQuery
jQuery(document).ready(function($) {

    // 链接嵌套 fix
    $('.list-button-group .button').on("tap", function(e) {
        e.stopPropagation();
    });

    // button
    $('.button').on('tap', function() {
        $(this).removeClass('active').addClass('active');
        var set = setTimeout(function() {
            $('.button').removeClass('active');
        }, 100)
    });

    // button wave
    $('.button-wave').on("tap", function() {
        $(this).removeClass('wave').addClass('wave');
        var set = setTimeout(function() {
            $('.button-wave').removeClass('wave');
        }, 500)
    });


});
