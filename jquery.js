$(document).ready(function() {

  var curPage = 0;
  var numOfPages = $(".skirtPage").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skirtPage";

  function traditionTransition() 
  {
    scrolling = true;

    for (var i = 0; i < numOfPages; i++)
    {
      if(i == curPage)
      {
        $(pgPrefix).eq(i).children().eq(0).animate({top: '0%'});
        $(pgPrefix).eq(i).children().eq(1).animate({top: '0%'});
      }
      else
      {
        $(pgPrefix).eq(i).children().eq(0).animate({top: '100%'});
        $(pgPrefix).eq(i).children().eq(1).animate({top: '-100%'});
      }
    }

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  }

  function navigateUp() {
    if (curPage === 0) return;
    curPage--;
    traditionTransition();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    traditionTransition();
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