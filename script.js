document.getElementById("errorMessage").style.display = "none";
document.getElementById("welcomeMessage").style.display = "none";

    var button = document.getElementById("submitInput");
    button.onclick= function checkLogin() {
      var emailInput = document.getElementById("emailInput").value;
      var passwordInput = document.getElementById("passwordInput").value;
        console.log(emailInput);
        console.log(passwordInput);
        var grant = {
          name: "Grant Chirpus",
          email: "coolguy@gmail.com",
          password: "ILoveCoffee"
        }
        if (
          emailInput === grant.email && passwordInput === grant.password){
          document.getElementById("welcomeMessage").style.display = "";
          document.getElementById("signInForm").style.display = "none";
        }
        else {
          document.getElementById("errorMessage").style.display = "";
          document.getElementById("signInForm").style.display = "none";
        }
        var tryAgainButton = document.getElementById("tryAgain");
        tryAgainButton.onclick= function tryAgainCharile() {
          document.getElementById("errorMessage").style.display = "none";
          document.getElementById("signInForm").style.display = "";
        }
}
