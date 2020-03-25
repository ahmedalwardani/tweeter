$(document).ready(() => {
  const createTweetElement = tweetObj => {
    let $tweet = $("<article>").addClass("tweet");
    $tweet.append(`
   <header>
   <img src="${tweetObj.user.avatars}" alt="Profile Pic!" />
   <div class="full-name">${tweetObj.user.name}</div>
   <div class="account">${tweetObj.user.handle}</div>
 </header>
 <div class="tweet-content">${tweetObj.content.text}</div>
 <footer>
   <div class="tweet-date">
     ${jQuery.timeago(tweetObj.created_at)}
   </div>
   <div class="interactions">
     <button class="buttons">
       <svg
         class="icons"
         xmlns="http://www.w3.org/2000/svg"
         width="56.261"
         height="57.154"
         viewBox="0 0 56.261 57.154"
       >
         <path
           d="M38.691,11.027c-5.982,0-10.922-3.883-18.443-3.883a21.7,21.7,0,0,0-7.6,1.341A6.252,6.252,0,1,0,3.242,11.38v43.1a2.679,2.679,0,0,0,2.679,2.679H7.707a2.679,2.679,0,0,0,2.679-2.679V43.937A31.189,31.189,0,0,1,23.16,41.468c5.982,0,10.922,3.883,18.443,3.883A23.369,23.369,0,0,0,55.279,40.79a3.566,3.566,0,0,0,1.545-2.942V10.71a3.572,3.572,0,0,0-5.077-3.239c-3.833,1.78-8.535,3.556-13.055,3.556Z"
           transform="translate(-0.563 0)"
         />
       </svg>
     </button>
     <button class="buttons">
       <svg
         class="icons"
         xmlns="http://www.w3.org/2000/svg"
         width="44.534"
         height="27.466"
         viewBox="0 0 44.534 27.466"
       >
         <path
           d="M44.273,24.159l-7.079,7.079a1.688,1.688,0,0,1-2.386,0l-7.08-7.079a1.687,1.687,0,0,1,0-2.386l.761-.761a1.688,1.688,0,0,1,2.42.035l2.842,3.009V11.25H20.563a1.688,1.688,0,0,1-1.193-.494L18.245,9.631A1.688,1.688,0,0,1,19.438,6.75H36.563A1.687,1.687,0,0,1,38.25,8.438V24.055l2.842-3.009a1.688,1.688,0,0,1,2.42-.035l.761.761a1.687,1.687,0,0,1,0,2.386ZM25.63,25.244a1.687,1.687,0,0,0-1.193-.494H11.25V11.945l2.842,3.009a1.688,1.688,0,0,0,2.42.035l.761-.761a1.687,1.687,0,0,0,0-2.386L10.193,4.761a1.687,1.687,0,0,0-2.386,0L.727,11.841a1.687,1.687,0,0,0,0,2.386l.761.761a1.688,1.688,0,0,0,2.42-.035L6.75,11.945V27.563A1.687,1.687,0,0,0,8.438,29.25H25.562a1.688,1.688,0,0,0,1.193-2.881L25.63,25.244Z"
           transform="translate(-0.233 -4.267)"
         />
       </svg>
     </button>
     <button class="buttons">
       <svg
         class="icons"
         xmlns="http://www.w3.org/2000/svg"
         width="36.001"
         height="31.501"
         viewBox="0 0 36.001 31.501"
       >
         <path
           d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z"
           transform="translate(0.001 -2.248)"
         />
       </svg>
     </button>
   </div>
 </footer>
      `);
    return $tweet;
  };
 
  const getTweets = () => {
    $.ajax({
      url:"/tweets",
      type:"GET",
      dataType: "JSON"
    })
      .then(response => {
        renderTweets(response.reverse());
      });
  };

  const renderTweets = tweets => {
    $("#tweets-container").empty();
    for (const tweet of tweets) {
      $("#tweets-container").append(createTweetElement(tweet));
    }
  };
  
  $("#submit-form").on("submit", function(event) {
    event.preventDefault();
    if ($("#tweet-text").val().length === 0 || !$("#tweet-text").val()) {
      alert("empty tweet!");
      
    } else if ($("#tweet-text").val().length > 140) {
      alert("exceeding allowed tweet length!");
    } else {
      $.ajax({
        url: "/tweets",
        type: "POST",
        data: $(this).serialize()
      }).then(() => {
        getTweets();
        $("#tweet-text").val("");
        $(".counter").val("140");
      });
    }
  });

  // Only on page load
  getTweets();
});






