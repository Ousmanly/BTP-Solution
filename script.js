let myForm = document.getElementById('form');
            
myForm.addEventListener('submit', function(e) {
    let nom = document.getElementById('nom');
    let regexName = /^[a-zA-Z\s]+$/;
    let message = document.getElementById('message');
    let regexMessage = /^[a-zA-Z0-9\-\.\,\'\s]+$/; 
    if (regexName.test(nom.value) == false ) {
        let errorname = document.getElementById('errorname');
        errorname.innerHTML = 'Le nom est invalide'
        errorname.style.color= 'red';
        e.preventDefault()
    }else{
        errorname.innerHTML = ''
    }
    if (regexMessage.test(message.value) == false ) {
        let errorMessage = document.getElementById('errorMessage');
        errorMessage.innerHTML = "Le message n'est pas invalidé";
        errorMessage.style.color= 'red';
        e.preventDefault()
    }else{
        errorMessage.innerHTML = ''
    }
});