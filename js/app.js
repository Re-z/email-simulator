//vars
let form = document.getElementById('email-form'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        message = document.getElementById('message'),
        resetBtn = document.getElementById('resetBtn'),
        successFieldStyles = 'box-shadow: 0 1px 0 0 #26a69a; border-bottom: 1px solid #26a69a;',
        errorFieldStyles = 'box-shadow: 0 1px 0 0 red; border-bottom: 1px solid red;';

//functions
function checkEmailField(ev){
    let emailValue = email.value;
    if(emailValue.indexOf('@') != -1) {email.style.cssText = successFieldStyles;} 
    else {email.style.cssText = errorFieldStyles}
    
}
function checkSubjectField(evt) {
    if(subject.value) {subject.style.cssText = successFieldStyles;} 
    else {subject.style.cssText = errorFieldStyles}
}

function checkMessageField(evt) {
    if(message.value) {message.style.cssText = successFieldStyles} 
    else {message.style.cssText = errorFieldStyles}
}





function handleForm(evt) {
        evt.preventDefault();
        if(checkEmailField() && checkSubjectField() && checkMessageField()) {
            alert(1)
        }
}

//listeners
email.addEventListener('blur', checkEmailField);
subject.addEventListener('blur', checkSubjectField);
message.addEventListener('blur', checkMessageField);
form.addEventListener('submit', handleForm);
resetBtn.addEventListener('click', function(){form.reset()});


