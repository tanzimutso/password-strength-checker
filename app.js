

var errorArray = [
    "lowercase letter required",
    "uppercase letter required",
    "special character required",
    "password must be minimum of 6 characters"
]


$(document).ready(function () {
    $("#pwd").change(function () {
        var password = $(this).val();

        if(password.length<6){
            document.getElementById('passText').innerHTML = errorArray[3]
        }
        else {

        if (password.includes('!') || password.includes('@') || password.includes('%') || password.includes(
                '&') || password.includes('$') || password.includes('#') || password.includes('*')) {
            document.getElementById('passText').innerHTML = "Included"
        } else
            document.getElementById('passText').innerHTML = errorArray[2]
        } 
            $("#cpwd").change(function () {
        var confirmPassword = $(this).val();
        if (password === confirmPassword) {
            document.getElementById('confirmPassText').innerHTML = "Password matched";
        } else 
            document.getElementById('confirmPassText').innerHTML = "Password didn't matched";
    });
    });

    
});
