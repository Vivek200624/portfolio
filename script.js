//function sendmail(){
 //   let parms = {
  //      name : document.getElimentById("name").value,
   //     phone : document.getElimentById("phone").value,
    //    email : document.getElimentById("email").value,
      //  message : document.getElimentById("message").value,
    //}
    //emailjs.send("service_u5nkx5y","template_hp1vkfc",parms).then(alert("email sent"))
 //}

 function sendmail() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    
    if (!name || !phone || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    var templateParams = {
        from_name: name,
        phone_number: phone,
        reply_to: email,
        message: message
    };

    emailjs.send("service_u5nkx5y", "template_32lf9r8", templateParams)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("Success", response);
        }, function(error) {
            alert("Failed to send email. Please try again later.");
            console.log("Error", error);
        });
}