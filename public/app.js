
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
        console.log(data.note.title)
        console.log(data.body)
      });
      $("#comment-name").val('');
      $("#comment-text").val('');
  })
});

   // Now make an ajax call for the Article
  // $.ajax({
  //   method: "GET",
  //   url: "/articles/" + thisId
  // })

  // // If that API call succeeds, add the title and comment for the note to the page
  //   .then(function(data) {
  //     console.log(data);

  //   });





