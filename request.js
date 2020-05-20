


function sendEmail() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var content = document.getElementById('message').value;	
	alert("Message from "+ name + "\n" +content);

	

	// Email.send({
	// Host: "smtp.gmail.com",
	// Username : '"'+email+'"',
	// Password : '"'+password+'"',
	// To : 'masintlay@gmail.com',
	// From : '"'+email+'"',
	// Subject : "Sending comment",
	// Body : '"'+content+'"',
	// }).then(function(message){
	// 	alert("mail sent successfully")
	// });
}