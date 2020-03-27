//Function that determines length of tweet and adjusts the colour (black/red) of remaining characters according to tweet's length
$(document).ready(() => {

  //Listen to an input event in the tweet text area
  $("#tweet-text").on("input", function() {

    //Maximum allowable characters in a single tweet
    const MAX = 140;

    //select counter and check for remaining allowed characters
    const counterEl = $(this).siblings(".counter");
    const remaining = MAX - $(this).val().length;

    //render counter's colour to red if length limit exceeded
    if (remaining < 0) {
      counterEl.css("color", "red");
    }
    
    //set counter to remaining characters (MAX - number of characters already entered)
    counterEl.val(remaining);
    
    //render counter's colour to black if tweet is within length limits
    if (remaining >= 0) {
      counterEl.css("color", "#545149");
    }
  });
});
