var errorArray = [
  "Lowercase Letter Required",
  "Uppercase Letter Required",
  "Special Character Required",
  "Password Must Be Minimum Of 6 Characters",
  "Password Matched",
  "Password Didn't Match"
];

$(document).ready(function() {
  $("#pwd").change(function() {
    var password = $(this).val();

    if (password.length < 6) {
      $("#passText").addClass("alert alert-danger");
      $("#passText").text("Password be minimum of 6 characters!");
    } else {
      if (
        password.includes("!") ||
        password.includes("@") ||
        password.includes("%") ||
        password.includes("&") ||
        password.includes("$") ||
        password.includes("#") ||
        password.includes("*")
      ) {
        $("#passText").removeClass("alert alert-danger");
        $("#passText").addClass("alert alert-success");
        $("#passText").text("Special Character Included!");
      } else {
        $("#passText").addClass("alert alert-danger");
        $("#passText").text(errorArray[2]);
      }
    }
    $("#cpwd").change(function() {
      var confirmPassword = $(this).val();
      if (confirmPassword === password) {
        $("#confirmPassText").removeClass("alert alert-danger");
        $("#confirmPassText").addClass("alert alert-success");
        $("#confirmPassText").text(errorArray[4]);
      } else {
        $("#confirmPassText").removeClass("alert alert-success");
        $("#confirmPassText").addClass("alert alert-danger");
        $("#confirmPassText").text(errorArray[5]);
      }

      var checkStatus =
        $("#passText").hasClass("alert alert-success") &&
        $("#confirmPassText").hasClass("alert alert-success");

      if (checkStatus) {
        $("#button").addClass("btn btn-success");
        $("#button").text("Submit")
      }
    });
  });
});
