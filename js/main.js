const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPhone = document.getElementById('user-phone');
const userBirthday = document.getElementById('user-birthday');

const nameCheck = document.getElementById('name-check');
const emailCheck = document.getElementById('email-check');
const phoneCheck = document.getElementById('phone-check');
const birthdayCheck = document.getElementById('birthday-check');

const stepOne = document.getElementById('one');

const nextButton = document.getElementById('next-btn');

function userInputsValidation() {
    if(nameValidation() && emailValidation() && phoneValidation() &&  birthdayValidation()){
        stepOne.innerHTML = "<img src='./assets/check-all.png'/>"
        nextButton.onclick = window.location.href='/experience.html'
    }
    nameValidation();
    emailValidation();
    phoneValidation();
    birthdayValidation();
}

function registrationStarted() {
    if(userName.value.length > 0 || userEmail.value.length > 0 || userPhone.value.length > 0 || userBirthday.value.length > 0) {
        stepOne.style.backgroundColor = '#E9FAF1'
        stepOne.style.border = 'none';
    }else{
        stepOne.style.backgroundColor = 'transparent'
        stepOne.style.border = '1px solid #E5E6E8';
    }
}

function nameValidation() {
    if(userName.value.length === 0 || userName.value.length < 2) {
        nameCheck.innerHTML = ''
        userName.style.background = '#FFEFEF';
        userName.style.color = '#DC3545';
        return false;
    }
    userName.style.background = '#F8F9FA';
    userName.style.color = 'black';
    nameCheck.innerHTML = "<img src='./assets/check.png'/>"
    return true
}

function emailValidation() {
    if(userEmail.value.length === 0 || !userEmail.value.includes('@redberry.ge')){
        nameCheck.innerHTML = ''
        userEmail.style.background = '#FFEFEF';
        userEmail.style.color = '#DC3545';
        return false
    }
    userName.style.background = '#F8F9FA';
    userName.style.color = 'black';
    emailCheck.innerHTML = "<img src='./assets/check.png'/>"
    return true
}

function phoneValidation() {
    if(userPhone.value.length === 0 || userPhone.value.length < 9){
        phoneCheck.innerHTML = ''
        userPhone.style.background = '#FFEFEF';
        userPhone.style.color = '#DC3545';
        return false
    }
    userPhone.style.background = '#F8F9FA';
    userPhone.style.color = 'black';
    phoneCheck.innerHTML = "<img src='./assets/check.png'/>"
    return true
}


function birthdayValidation() {
    if(userBirthday.value.length === 0){
        phoneCheck.innerHTML = ''
        userBirthday.style.background = '#FFEFEF';
        userBirthday.style.color = '#DC3545';
        return false
    }
    userBirthday.style.background = '#F8F9FA';
    userBirthday.style.color = 'black';
    birthdayCheck.innerHTML = "<img src='./assets/check.png'/>"
    return true
}



