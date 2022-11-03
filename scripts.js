/* Add your JavaScript to this file */
window.onload = (evt) => {
    var email_entry = document.getElementById("email");
    document.getElementsByClassName("btn")[1].onclick= (e) => 
	{
         var input = email_entry.value;
         if (input == "") {
             document.getElementsByClassName("message")[0].innerHTML = "Please enter a valid email address.";
	alert("Please enter a valid email address.");
         } 

         else if(input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
	{
             document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " +input + " has been added to our mailing list!";
	alert("Thank you! Your email address " +input + " has been added to our mailing list!");
	}

         else 
	{
        alert("Email address is invalid!");
        document.form1.text1.focus();
        return false;
	}
}}