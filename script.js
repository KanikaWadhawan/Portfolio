//selecting html elements

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
//console.log(emailElement);
let submitButton = document.querySelector('#submit-button');

//attaching click listener
submitButton.addEventListener('click', function(e){
	e.preventDefault();
// getting the values entered by user
    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

// email validation
    if(emailValue.includes('@')){
    	alert('Thanks for your message');

    }
    	else{
          alert('Oops that doesnt seem like a valid email address. Please try again');
    	}
    
	console.log("Email:", emailValue);
	console.log("Message:", messageValue);

})
