const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

const spanName = document.querySelector('.fname')
const spanLName = document.querySelector('.lname')
const spanEmail = document.querySelector('.email')
const spanPass = document.querySelector('.password')

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(firstName.value == ''){
        setErrorMessage(spanName, 'First name cannot be empty')
    }else{
        spanName.classList.remove('error')
    }

    if(lastName.value == ''){
        setErrorMessage(spanLName, 'Last name cannot be empty')
    }else{
        spanLName.classList.remove('error')
    }

    if(!validateEmail(email.value)){
        setErrorMessage(spanEmail, 'Email not valid')
    }else{
        spanEmail.classList.remove('error')
    }
    
    if(password.value == ''){
        setErrorMessage(spanPass, 'Password cannot be empty')
    }else{
        spanPass.classList.remove('error')
    }

})

function setErrorMessage(span, message){
    span.classList.add("error")
    span.textContent = message
}