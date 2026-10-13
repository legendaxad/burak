console.log("Signup frontend javascript file");
$(function () { })

function validateSignupForm() {
      const memberNick = $(".member-nick").val();
      const memberPhone = $(".member-Phone").val();
      const memberPassword = $(".member-password").val();
      const confirmPassword = $(".confirm-password").val();
      console.log(memberPassword)
      console.log(confirmPassword)

      if (memberNick === "" || memberPhone === "" || memberPassword === "" || confirmPassword === "") {
            alert("Please insert all required inputs")
            return false
      }
      if (memberPassword !== confirmPassword) {
            alert("Password differs, please check!")
            return false
      }

}