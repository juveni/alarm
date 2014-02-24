function run(o) {
    var code = $(o).parent().find('pre').text();
    eval(code);
}

// disable ajax to call ready() for each document
$.mobile.ajaxEnabled = false;

//Initialize function
var init = function () {
    console.log("init() called");

    $('#toc').load('toc.html', function() {
        $('#toc').listview('refresh');
    });

    $(".content").hide();
    // toggle the component with class msg_body
    $(".heading").hover(function() {
        $(this).css("cursor", "pointer");
    });
    $(".heading").click(function () {
        $(this).next(".content").slideToggle(300);
    });
};
$(document).ready(init);

/**
* Shows a toast message.
*
* @param msg
* @param options { duration: <duration (in milliseconds)>, fadeOut: <how long the animation will run (in milliseconds)> }
*/
jQuery.fn.toast = function (msg, options) {
   var settings = jQuery.extend({
       duration: 1500, fadeOut: 1000
   }, options);

   $("<div class='ui-loader ui-body-c ui-corner-all'><h1>" + msg + "</h1></div>").css({
       "display": "block",
       "top": $(window).scrollTop() + 150
       })
       .appendTo($.mobile.pageContainer)
       .delay(settings.duration)
       .fadeOut(settings.fadeOut, function() {
           $(this).remove();
       }
   );
};

// Override alert function
/* It must be sequential. For example, toast() in for loop can not display each information.
function alert(s) {
   $().toast(s);
}
*/
function toastMessage(s) {
   $().toast(s);
}

