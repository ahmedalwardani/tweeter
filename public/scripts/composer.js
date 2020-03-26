const scrollFunction = () => {
  if ($(window).scrollTop() > 300) {
    $("#scroll-button").css("display", "flex");
  } else {
    $("#scroll-button").css("display", "none");
  }
};

$(window).scroll(() => {
  scrollFunction();
});

$("#scroll-button").click(() => {
  $(window).scrollTop(0);
  $("#scroll-button").css("display", "none");
  $("#main-form").slideDown();
  $("#tweet-text").focus();
});


