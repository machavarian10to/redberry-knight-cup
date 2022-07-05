const stepOne = document.getElementById('one');
const stepTwo = document.getElementById('two');

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

const knowledge = document.getElementById('knowledge-level');
const character = document.getElementById('characters');
// const experience = document.getElementById('experience')
const championship = document.getElementsByName('redberry-championship');


const knowledgeError = document.getElementById('knowledge-error');
const characterError = document.getElementById('character-error')
const experienceError = document.getElementById('experience-error')

const nextButton = document.getElementById('next-btn');
const doneButton = document.getElementById('done-btn')

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

https://chess-tournament-api.devtest.ge/images/nona.jpg

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('characters');

    fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
    .then(res => res.json())
    .then(characters => {
        let options = '';
        characters.forEach(character => {
            options += `<option value='${character.name}'>${character.name}</option>`
        });
        options += `<option value='other'>Other</option>`
        dropdown.innerHTML += options;
    })
    .catch(err => console.log(err))
})

function registrationStarted() {
    if(userName.value.length > 0 || userEmail.value.length > 0 || userPhone.value.length > 0 || userBirthday.value.length > 0) {
        stepOne.style.backgroundColor = '#E9FAF1';
        stepOne.style.border = 'none';
    }else{
        stepOne.style.backgroundColor = 'transparent';
        stepOne.style.border = '1px solid #E5E6E8';
    }
}

function registrationContinue() {
    if(knowledge.value.length > 0 || character.value.length > 0){
        stepTwo.style.backgroundColor = '#E9FAF1';
        stepTwo.style.border = 'none';
    }else{
        stepTwo.style.backgroundColor = 'transparent';
        stepTwo.style.border = '1px solid #E5E6E8';
    }
}

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

function userExperiencesValidation() {
    if(knowledgeValidation() && characterValidation() && experienceValidation()){
        doneButton.onclick = window.location.href='/onboarding.html'
    }
    knowledgeValidation();
    characterValidation();
    experienceValidation();
}

function knowledgeValidation() {
    if(knowledge.value === 'title'){
        knowledgeError.style.display = 'block'
        return false;
    }
    knowledgeError.style.display = 'none'
    return true;
}

function characterValidation() {
    if(character.value === 'title'){
        characterError.style.display = 'block'
        return false;
    }
    characterError.style.display = 'none'
    return true;
}

function experienceValidation() {
    if(!championship[0].checked && !championship[1].checked){
        experienceError.style.display = 'block'
        return false;
    }
    experienceError.style.display = 'none'
    return true;
}

function nameValidation() {
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

function emailValidation() {
    if(!userEmail.value.includes('@redberry.ge')){
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

function phoneValidation() {
    if(userPhone.value.length < 9){
        phoneCheck.innerHTML = ''
        phoneError.style.display = 'block'
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


function birthdayValidation() {
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

