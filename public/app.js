//When the post comment button is clicked on an Article
$("#add-comment").on("click", function() {
  var thisId = $(this).attr("data-id");
  console.log(thisId)
 // Whenever someone clicks post on Modal box
$("#post-comment").on("click", function() {
  // Empty the comments from the modal box
  var comments = $("#comment-text").val()
  console.log(thisId)
  console.log(comments)
 $("#comment-name").val('');
  $("#comment-text").val('');
// AJAX POST call to the submit route on the server
// This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/articles/:id",
    data: {
      title: $("#comment-name").val(),
      note: $("#comment-text").val(),
    }
  })

});



   // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })

  // If that API call succeeds, add the title and comment for the note to the page
    .then(function(data) {
      console.log(data);
    // Add the title and body to the #note section
      $("#notes").prepend("<p class='data-entry' data-id=" + data._id + "><span class='dataTitle' data-id=" +
      data._id + ">" + data.title + "</span><span class=delete>X</span></p>");
      // Clear the note and title inputs on the page
      $("#note").val("");
      $("#title").val("");
    });
});



  
