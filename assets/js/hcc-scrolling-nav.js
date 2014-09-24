/*
    Get the data needed...
*/
$(function() {

  scrollerLinks = []
  $('.navbar-scroller').find('li').each(function() {
    scrollerLinks.push($(this));
  });
  anchor_names = []
  anchor_pos = []

  for(var i = 0, l=document.anchors.length; i<l; i++) {
    anchor_names.push(document.anchors[i].name);
    anchor_pos.push(document.anchors[i].offsetTop);
  }

  //Get the total height of the document:
  //http://james.padolsey.com/javascript/get-document-height-cross-browser/
  fullHeight = Math.max($(document).height(), $(window).height(), document.documentElement.clientHeight);

  anchor_pos.push(fullHeight);
});

/*
Scrolling Functions
*/
$(window).scroll(function() {
  var pos = $(this).scrollTop();

  //Stick the main scroller to the top if we pass it.
  if (pos > 155){
    $(".navbar-inner").css({"position": "fixed", "top": 0, "z-index":10 })
  }else if(pos < 155){
    $(".navbar-inner").css({"position": "absolute", "top": 155})
  }



  for (var i=0; i<anchor_pos.length-1; i++){
    scrollerLinks[i].removeClass("active");
    if (pos > anchor_pos[i]-1 && pos < anchor_pos[i+1]){
      scrollerLinks[i].addClass("active");
    }
  }

  
  //Also, add the secondary scroller.
  if (pos > 155) { //
    $(".navbar-scroller").css({"position": "fixed", "top": 40 });
    if ($(".navbar-scroller").css("display") == "none"){
      $(".navbar-scroller").hide().fadeIn(300);
    }

  }else {
    $(".navbar-scroller").css({ "display" : "none" });
  }         
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});