/*
 **makes nav button of active section stay highlighted
 **smooth scrolling to section when nav button used
 */
var main = main = $('#nav ul');

$(document).ready(function() {
  $(document).scroll(onScroll);

  //smoothscroll
  $('.scroll').click(function(e) {
    e.preventDefault();
    $(document).off("scroll");

    main.children().removeClass();
    $(this).parent().addClass('active');

    var target = this.hash,
      $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).scroll(onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#nav li a').each(function() {
    var refElement = $($(this).attr("href"));

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      main.children().removeClass("active");
      $(this).parent().addClass("active");
    } else if (refElement.position().top - 150 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      main.children().removeClass();
      $(this).parent().addClass("active");
    } else {
      $(this).parent().removeClass("active");
    }
  });
}

/*$(document).ready(function() {
  resizeDiv();
});

window.onresize = function(event) {
  resizeDiv();
}

function resizeDiv() {
  $('#section').css({‘height’: $(window).height() + ‘px’});
}*/