

showFormData = function(event) {
   // prevent default browser behavior
   event.preventDefault();

   var formElement = document.forms['age-form'];
   let dataDisplay = document.createElement('div')
   var formData = new FormData(formElement);
   var queryString = new URLSearchParams(formData).toString();
   dataDisplay.innerHTML = "data submitted: " + queryString

   formElement.parentNode.appendChild(dataDisplay)
   // prevent default browser behavior
   return false
}

var form = document.getElementById('age-form');
if (form.attachEvent) {
   form.attachEvent("submit", showFormData);
} else {
   form.addEventListener("submit", showFormData);
}