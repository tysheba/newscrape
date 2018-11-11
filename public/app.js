
//When the add comment button is clicked on an Article
$(document).on("click", "#add-comment", function () {
  var thisId = $(this).attr("data-id");
  console.log(thisId)
  console.log("button clicked")
  // Whenever someone clicks post on Modal box
  $("#post-comment").on("click", function () {
    // Empty the comments from the modal box
    var comments = $("#comment-text").val()
    var commentTitle = $("#comment-name").val()
    console.log(commentTitle)
    console.log(comments)

    // AJAX POST call to the submit route on the server
    // This will take the data from the form and send it to the server
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        // Value taken from title input
        title: $("#comment-name").val(),
        // Value taken from note textarea
        body: $("#comment-text").val()
      }
    })
      // With that done
      .then(function (data) {
        // Log the response
        console.log(data);
      });
      $("#comment-name").val('');
      $("#comment-text").val('');
      location.reload();
  })
});

  //Scrape for new articles
  $("#scrape").on("click",function() {
    console.log("button clicked")
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "/scrape",
      // On a successful call, clear the #results section
      success: function(response) {
        console.log("scrape complete")
      }
    });
  })




