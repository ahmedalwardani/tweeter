//Function listening to a scroll event on the window and triggering the scrollFunction() below
$(window).scroll(() => {
  scrollFunction();
});

//Function to show "scroll up to top" button when user scrolls down
const scrollFunction = () => {
  if ($(window).scrollTop() > 200) {
    $("#scroll-button").css("display", "flex");
  } else {
    $("#scroll-button").css("display", "none");
  }
};

//Function that scrolls window to the top upon clicking on the "scroll up to top" button
$("#scroll-button").click(() => {
  $(window).scrollTop(0);
  $("#scroll-button").css("display", "none");
  $("#main-form").slideDown();
  $("#tweet-text").focus();
});


