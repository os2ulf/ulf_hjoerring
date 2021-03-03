jQuery(function($){

	$(document).ready(function(){

    $("nav.nav ul.nav--inner").clone().appendTo("#mobile-menu");
    $("#mobile-menu ul li .logo").parent().remove();
		$("#mobile-menu").mmenu({
			offCanvas: {
				position: "right"
			}
		});
    $('#mobile-menu ul#mm-0').prepend('<li class="mm-subtitle"><span class="mm-subclose">Menu</span></li>');
    $('.mm-subopen').click(function() {
      var subLink = $(this).attr('href');
      $('#mobile-menu').find(subLink).trigger("open.mm");
    });
    $('.mm-subclose').click(function() {
      var subLink = $(this).attr('href');
      $('#mobile-menu').find(subLink).trigger("open.mm");
    });
    $("#menu-trigger").click(function() {
			 $("#mobile-menu").trigger("open.mm");
		});

  }); // END document ready

  searchBoxSticky();

  function searchBoxSticky() {
    $(window).on("scroll", function() {
      if ($('#searchBoxApp').length > 0) {
        var searchBoxOffset = $("#searchBoxApp").parent().offset();
        var searchBoxWidth = $("#searchBoxApp").parent().width();
        var scroll = $(window).scrollTop();
        if (scroll >= searchBoxOffset.top) {
          $("#searchBoxApp").addClass('sticky').css('left', searchBoxOffset.left).css('width', searchBoxWidth);
        } else {
          $("#searchBoxApp").removeClass('sticky').css('left', 'auto').css('width', 'auto');
        }
      }
    });
    $(window).on('resize', function() {
      if ($('#searchBoxApp').length > 0) {
        var searchBoxOffset = $("#searchBoxApp").parent().offset();
        var searchBoxWidth = $("#searchBoxApp").parent().width();
        if ($("#searchBoxApp").hasClass('sticky')) {
          $("#searchBoxApp").addClass('sticky').css('left', searchBoxOffset.left).css('width', searchBoxWidth);
        } else {
          $("#searchBoxApp").removeClass('sticky').css('left', 'auto').css('width', 'auto');
        }
      }
    }); // END window load
  }

}); // END function
