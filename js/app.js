//vars
let form = document.getElementById('email-form'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        message = document.getElementById('message'),
        resetBtn = document.getElementById('resetBtn'),
        successFieldStyles = 'box-shadow: 0 1px 0 0 #26a69a; border-bottom: 1px solid #26a69a;',
        errorFieldStyles = 'box-shadow: 0 1px 0 0 red; border-bottom: 1px solid red;',
        defaultFieldStyles = 'box-shadow: none; border-bottom: 1px solid grey';

//functions
function checkEmailField(ev){
    let emailValue = email.value;
    if(emailValue.indexOf('@') != -1) {email.style.cssText = successFieldStyles; return true;} 
    else {email.style.cssText = errorFieldStyles; return false}
    
}
function checkSubjectField(evt) {
    // console.log(typeof subject.value)
    if(subject.value.length) {subject.style.cssText = successFieldStyles; return true;} 
    else {subject.style.cssText = errorFieldStyles; return false}
}

function checkMessageField(evt) {
    if(message.value.length) {message.style.cssText = successFieldStyles; return true;} 
    else {message.style.cssText = errorFieldStyles;return false;}
}





function handleForm(evt) {
        evt.preventDefault();
        checkEmailField();
        checkSubjectField();
        checkMessageField();
        
        if(checkEmailField() && checkSubjectField() && checkMessageField()) {
            alert(1)
        }
}

//listeners
email.addEventListener('blur', checkEmailField);
subject.addEventListener('blur', checkSubjectField);
message.addEventListener('blur', checkMessageField);
form.addEventListener('submit', handleForm);

resetBtn.addEventListener('click', function(){
    // form.reset();
    email.style.cssText = defaultFieldStyles;
    subject.style.cssText = defaultFieldStyles;
    message.style.cssText = defaultFieldStyles;
});



