$(document).ready(() => {
  $("#tweet-text").on("input", function() {
    const MAX = 140;

    const counterEl = $(this).siblings(".counter");
    const remaining = MAX - $(this).val().length;

    if (remaining < 0) {
      counterEl.css("color", "red");
    }
    counterEl.val(remaining);
    
    if (remaining >= 0) {
      counterEl.css("color", "#545149");
    }
  });
});
