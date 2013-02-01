// $(function(){
// 			$('#slides').slides({
// 				preload: true,
// 				preloadImage: 'img/loading.gif',
// 				play: 5000,
// 				pause: 2500,
// 				hoverPause: true
// 			});
// 		});
$(document).ready(function() {
    $("div#thePlace").height(window.innerHeight - 50);
    $("div#faqs").height(window.innerHeight - 50);
    $("div.logo").click(function() {
        ScrollTo("menuPlaceholder");
    });
    if($.browser.webkit)
    {
         $("div#thePlace").attr("data-stellar-horizontal-offset", "center");
         $("div#faqs").attr("data-stellar-horizontal-offset", "center");
    }
    else
    {
        if(window.innerWidth < 1350)
            $("div#thePlace").attr("data-stellar-horizontal-offset",  window.innerWidth - 1350);
        if(window.innerWidth < 1200)
            $("div#faqs").attr("data-stellar-horizontal-offset", window.innerWidth -1200);
    }
    $(window).stellar({
         positionProperty: 'transform',
         scrollProperty: 'scroll',
         parallaxElements: false
    });
    //$('div#thePlace').stellar();
    //$('div#faqs').stellar();
    $("#slides").slides().show();
    window.setTimeout(function() {
        $("#slides").slides("play");
    }, 5000);

    $('#faqs h3').each(function() {
        var tis = $(this),
            state = false,
            answer = tis.next('div').hide().css('height', 'auto').slideUp();
        tis.click(function() {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active', state);
        });
    });
});


$("#divRSVP a").click(function() {
    if (!$("#divInvite").is(":visible")) {
        $("#divInvite").slideDown();
        $("#divRSVP").animate({
            left: '+=800'
        });
        $("#iRSVP").attr("src", "http://www.mikeyandjacob.com/RSVPform.html");
    }
    else {
        $("#divInvite").slideUp();
        $("#divRSVP").animate({
            left: '-=800'
        });
    }
});



$("#divDirections a").click(function() {
    return false;
});



$("#divStory a").click(function() {
    $('html, body').animate({
        scrollTop: 300
    }, '200');
    return false;
});

function ScrollTo(id) {
    var aTag = $("div#" + id);
    $('html,body').animate({
        scrollTop: aTag.offset().top - 50
    }, 'slow');
}