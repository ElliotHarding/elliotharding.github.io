$(document).ready(function() {

  var curPage = 1;
  var numOfPages = $(".skirtPage").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = "#skirtPage";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  //Could class count:
  $(document).ready(function() {
    $('#dwnBtn').click(navigateDown);
  });

  $(document).ready(function() {
    $('#upBtn').click(navigateUp);
  });

  $(document).ready(function() {
    $('#dwnBtn2').click(navigateDown);
  });

  $(document).ready(function() {
    $('#upBtn2').click(navigateUp);
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

 /*
    var updated=0, st;
  $('body').on({
      'touchmove': function(e) { 
      st = $(this).scrollTop();
      if(st > updated) {
          navigateUp();
      }
      else {
          navigateDown();
      }
      updated = st;
      }
  });*/

});