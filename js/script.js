if ($(window).scrollTop() < $(".first").offset().top - 1) {
  $(".icon").hide();
}
$(document).ready(function() {
  updateSlide();
  $(window).scroll(function () {
    updateSlide();
    if ($(window).scrollTop() > $(".first").offset().top - 1) {
      $(".icon").fadeIn();
    } else {
      $(".icon").fadeOut();
    }
  });
  $(".smoothScroll").click(function(event){
    event.preventDefault();
    var name = $(this).attr("href").substring(1);
    $('html,body').animate({
      scrollTop: $("a[name="+name+"]").offset().top
    }, 500);
  });
    document.getElementById("register_button").onclick = function(event){
		window.open('https://docs.google.com/forms/d/e/1FAIpQLSd7IWauTmeMEYhx9r_T1frZmgSeq-B7zw0km2UfHAHORTX2qQ/viewform', '_blank');
        //window.alert("This function has yet to be added!");
    }
  function updateSlide(){
    if ($(window).width() > 768) {
      if ($(window).scrollTop() < $(".first").offset().top - 1) {
        $(".one").attr("class","one");
        $(".two").attr("class","two");
        $(".three").attr("class","three");
        $(".four").attr("class","four");
        $(".five").attr("class","five");
        $("hr").css("display", "none")
        $("hr").attr("class","slide");
      } else if ($(window).scrollTop() < $(".second").offset().top - 1) {
        aboutActive();
        $("hr").css("display", "block")
        $("hr").attr("class","slide about");
      } else if ($(window).scrollTop() < $(".third").offset().top - 1) {
        registerActive();
        $("hr").css("display", "block")
        $("hr").attr("class","slide register");
      } else if ($(window).scrollTop() < $(".fourth").offset().top - 1) {
        FAQActive();
        $("hr").css("display", "block")
        $("hr").attr("class","slide FAQ");
      } else if ($(window).scrollTop() < $(".fifth").offset().top - 1) {
        contactUsActive();
        $("hr").css("display", "block")
        $("hr").attr("class","slide contactUs");
      } else {
        scheduleActive();
        $("hr").css("display", "block")
        $("hr").attr("class","slide schedule");
      }
    } else {
      $("hr").css("display", "none")
      if ($(window).scrollTop() < $(".first").offset().top - 1) {
        $(".one").attr("class","one");
        $(".two").attr("class","two");
        $(".three").attr("class","three");
        $(".four").attr("class","four");
        $(".five").attr("class","five");
      } else if ($(window).scrollTop() < $(".second").offset().top - 1) {
        aboutActive();
      } else if ($(window).scrollTop() < $(".third").offset().top - 1) {
        registerActive();
      } else if ($(window).scrollTop() < $(".fourth").offset().top - 1) {
        FAQActive();
      } else if ($(window).scrollTop() < $(".fifth").offset().top - 1) {
        contactUsActive();
      } else {
        scheduleActive();
      }
    }
  }
  function aboutActive(){
    $(".one").attr("class","one active");
    $(".two").attr("class","two");
    $(".three").attr("class","three");
    $(".four").attr("class","four");
    $(".five").attr("class","five");
  }
  function registerActive(){
    $(".one").attr("class","one");
    $(".two").attr("class","two active");
    $(".three").attr("class","three");
    $(".four").attr("class","four");
    $(".five").attr("class","five");
  }
  function FAQActive(){
    $(".one").attr("class","one");
    $(".two").attr("class","two");
    $(".three").attr("class","three active");
    $(".four").attr("class","four");
    $(".five").attr("class","five");
  }
  function contactUsActive(){
    $(".one").attr("class","one");
    $(".two").attr("class","two");
    $(".three").attr("class","three");
    $(".four").attr("class","four active");
    $(".five").attr("class","five");
  }
  function scheduleActive(){
    $(".one").attr("class","one");
    $(".two").attr("class","two");
    $(".three").attr("class","three");
    $(".four").attr("class","four");
    $(".five").attr("class","five active");
  }
});
