//vars
let form = document.getElementById('email-form'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject'),
        message = document.getElementById('message'),
        resetBtn = document.getElementById('resetBtn'),
        successFieldStyles = 'box-shadow: 0 1px 0 0 #26a69a; border-bottom: 1px solid #26a69a;',
        errorFieldStyles = 'box-shadow: 0 1px 0 0 red; border-bottom: 1px solid red;',
        defaultFieldStyles = 'box-shadow: none; border-bottom: 1px solid grey',
        preloader = document.querySelector('#loaders img');

//functions
//check email
function checkEmailField(evt){
    let emailValue = email.value;
    // parse string, if have @ - return true and highlight border
    if(emailValue.indexOf('@') != -1) {email.style.cssText = successFieldStyles; return true;} 
    else {email.style.cssText = errorFieldStyles; return false}
    
}
function checkSubjectField(evt) {
    // parse string, if there is a value - show true and highlight border
    if(subject.value) {subject.style.cssText = successFieldStyles; return true;} 
    else {subject.style.cssText = errorFieldStyles; return false}
}

function checkMessageField(evt) {
    // parse string, if there is a value - show true and highlight border
    if(message.value) {message.style.cssText = successFieldStyles; return true;} 
    else {message.style.cssText = errorFieldStyles;return false;}
};
//show preloader
function showPreloader(evt){
    preloader.style.display = 'block';
    setTimeout(function(){
        preloader.setAttribute('src', 'img/mail.gif');
        sendBtn.disabled = true;
    }, 3000)
};

function handleForm(evt) {
        evt.preventDefault();
        checkEmailField();
        checkSubjectField();
        checkMessageField();
        //if all succes - show preloaders and disable submit btn
        if(checkEmailField() && checkSubjectField() && checkMessageField()) {
            showPreloader();
        }
}

//listeners
email.addEventListener('blur', checkEmailField);
subject.addEventListener('blur', checkSubjectField);
message.addEventListener('blur', checkMessageField);
form.addEventListener('submit', handleForm);

resetBtn.addEventListener('click', function(){
    //reset styles at msg fields
    email.style.cssText = defaultFieldStyles;
    subject.style.cssText = defaultFieldStyles;
    message.style.cssText = defaultFieldStyles;
    //reset preloader img and hide it
    preloader.style.display = 'none';
    preloader.setAttribute('src', 'img/spinner.gif');
    //block send btn
    sendBtn.disabled = false;
});



