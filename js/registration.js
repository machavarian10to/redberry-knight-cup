const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPhone = document.getElementById('user-phone');
const userBirthday = document.getElementById('user-birthday');

const nameCheck = document.getElementById('name-check');
const emailCheck = document.getElementById('email-check');
const phoneCheck = document.getElementById('phone-check');
const birthdayCheck = document.getElementById('birthday-check');

const usernameError = document.getElementById('error-username');
const emailError = document.getElementById('error-email');
const phoneError = document.getElementById('error-phone');
const dateError = document.getElementById('error-date');

const usernameErrClose = document.getElementById("username-err-close");
const emailErrClose = document.getElementById("email-err-close");
const phoneErrClose = document.getElementById("phone-err-close");
const dateErrClose = document.getElementById("date-err-close");

const nextButton = document.getElementById('next-btn');

const stepOne = document.getElementById('one');

const usernameIsSaved = localStorage.getItem('name');
const emailIsSaved = localStorage.getItem('email');
const phoneIsSaved = localStorage.getItem('phone');
const birthdayIsSaved = localStorage.getItem('date_of_birth');

const usernameRequired = document.getElementById('username');
const emailRequired = document.getElementById('email');
const phoneRequired = document.getElementById('phone');
const birthdayRequired = document.getElementById('birthday');

// asterisk remover if user types info
usernameRequired.addEventListener('input', () => {
    usernameRequired.classList.remove('username-required');
})

emailRequired.addEventListener('input', () => {
    emailRequired.classList.remove('email-required');
})

phoneRequired.addEventListener('input', () => {
    phoneRequired.classList.remove('phone-required');
})

birthdayRequired.addEventListener('input', () => {
    birthdayRequired.classList.remove('birthday-required');
})

// asterisk addition if input is not filled
function addAsteriskIfNeeded() {
    if(userName.value == ''){
        usernameRequired.classList.add('username-required');
    }
    if(userEmail.value == ''){
        emailRequired.classList.add('email-required');
    }
    if(userPhone.value == ''){
        phoneRequired.classList.add('phone-required');
    }
    if(userBirthday.value == ''){
        birthdayRequired.classList.add('birthday-required');
    }
}

// set info to the form if user has already filled it before
if(usernameIsSaved) {
    userName.value = usernameIsSaved;
}
if(emailIsSaved) {
    userEmail.value = emailIsSaved;
}
if(phoneIsSaved) {
    userPhone.value = phoneIsSaved;
}
if(birthdayIsSaved) {
    userBirthday.value = birthdayIsSaved;
}

if(userName.value.length > 0 || userEmail.value.length > 0 || userPhone.value.length > 0 || userBirthday.value.length > 0) {
    stepOne.style.backgroundColor = '#E9FAF1';
    stepOne.style.border = 'none';
}


// save info if user enters his data for the first time
function usernameSaving() {
    localStorage.setItem("name", userName.value);
}

function emailSaving() {
    localStorage.setItem("email", userEmail.value);
}

function phoneSaving() {
    localStorage.setItem("phone", userPhone.value);
}

function birthdaySaving() {
    localStorage.setItem("date_of_birth", userBirthday.value);
}

// change steps wizard style if user starts editing his data
function registrationStarted() {
    if(userName.value.length > 0 || userEmail.value.length > 0 || userPhone.value.length > 0 || userBirthday.value.length > 0) {
        stepOne.style.backgroundColor = '#E9FAF1';
        stepOne.style.border = 'none';
    }else{
        stepOne.style.backgroundColor = 'transparent';
        stepOne.style.border = '1px solid #E5E6E8';
    }
}

// validate every registration form field after user clicks the next button
function userInputsValidation() {
    if(nameIsValid() && emailIsValid() && phoneIsValid() &&  birthdayIsValid()){
        stepOne.innerHTML = "<img src='./assets/check-all.png'/>"
        nextButton.onclick = window.location.href='/experience.html'
    }
    nameIsValid();
    emailIsValid();
    phoneIsValid();
    birthdayIsValid();
}

function nameIsValid() {
    if(userName.value.length < 2) {
        nameCheck.innerHTML = '';
        usernameError.style.display = 'block'
        userName.style.background = '#FFEFEF';
        userName.style.color = '#DC3545';
        return false;
    }
    userName.style.background = '#F8F9FA';
    userName.style.color = 'black';
    usernameError.style.display = 'none'
    nameCheck.innerHTML = "<img src='./assets/check.png'/>"
    return true
}

function emailIsValid() {
    let pattern = /^[^ ]+@redberry.ge/

    if(!userEmail.value.match(pattern)){
        emailCheck.innerHTML = '';
        emailError.style.display = 'block'
        userEmail.style.background = '#FFEFEF';
        userEmail.style.color = '#DC3545';
        return false
    }
    userEmail.style.background = '#F8F9FA';
    userEmail.style.color = 'black';
    emailError.style.display = 'none'
    emailCheck.innerHTML = "<img src='./assets/check.png'/>"
    return true
}

function phoneIsValid() {
    if(userPhone.value.length !== 9){
        phoneCheck.innerHTML = '';
        phoneError.style.display = 'block';
        userPhone.style.background = '#FFEFEF';
        userPhone.style.color = '#DC3545';
        return false
    }
    userPhone.style.background = '#F8F9FA';
    userPhone.style.color = 'black';
    phoneError.style.display = 'none'
    phoneCheck.innerHTML = "<img src='./assets/check.png'/>"
    return true
}


function birthdayIsValid() {
    if(userBirthday.value.length === 0){
        birthdayCheck.innerHTML = ''
        dateError.style.display = 'block'
        userBirthday.style.background = '#FFEFEF';
        userBirthday.style.color = '#DC3545';
        return false
    }
    userBirthday.style.background = '#F8F9FA';
    userBirthday.style.color = 'black';
    dateError.style.display = 'none';
    birthdayCheck.innerHTML = "<img src='./assets/check.png'/>";
    return true
}


// close each message boxes after click on X icon 
usernameErrClose.addEventListener('click', () => {
    usernameError.style.display = 'none'
})

emailErrClose.addEventListener('click', () => {
    emailError.style.display = 'none'
})

phoneErrClose.addEventListener('click', () => {
    phoneError.style.display = 'none'
})

dateErrClose.addEventListener('click', () => {
    dateError.style.display = 'none'
})

