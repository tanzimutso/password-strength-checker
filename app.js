var errorArray = [
  "lowercase letter required",
  "uppercase letter required",
  "special character required",
  "password must be minimum of 6 characters",
  "password matched",
  "password didn't match"
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
        $("#passText").text("Special character included!");
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
    });
  });
});
