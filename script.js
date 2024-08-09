const scriptURL = 'https://script.google.com/macros/s/AKfycbwiCGGBSaGD5eNwoRM2lFLXW9Qu-BCvB5LrR-NvWByjVeyx2L9ySwT5vYJtXDXCEFDN3g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted succesfully."))
    .then(()=> {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})