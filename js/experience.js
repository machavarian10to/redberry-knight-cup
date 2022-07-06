const stepTwo = document.getElementById('two');

const doneButton = document.getElementById('done-btn')

const knowledge = document.getElementById('knowledge-level');
const dropdown = document.getElementById('characters');
const character = document.getElementById('characters');
const championship = document.getElementsByName('redberry-championship');

const knowledgeError = document.getElementById('knowledge-error');
const characterError = document.getElementById('character-error')
const experienceError = document.getElementById('experience-error')

const savedKnowledge = localStorage.getItem('experience_level');
const savedExperience = localStorage.getItem('already_participated');
const savedCharacter = localStorage.getItem('character');



// get characters name from the server and set to the options in dropdown
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

// let characters = [];

// async function getCharacters() {
//     return fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// const data = await getCharacters();


// console.log(characters)
// characters.forEach(element => {
//     console.log(element)
// });

// get saved data if user has already filled form
if(savedKnowledge) {
    knowledge.value = savedKnowledge;
}
if(!savedExperience === null) {
    championship.value = savedExperience;
}
if(savedCharacter){
    character.value = savedCharacter;
}

// save user info if he fills form for the first time
function knowledgeSaving() {
    localStorage.setItem("experience_level", knowledge.value);
}

function experienceSaving() {
    let already_participated = false;
    if(championship[0].checked){
        already_participated = true;
    }
    localStorage.setItem("already_participated",  JSON.stringify(already_participated));
}

function characterSaving() {
    localStorage.setItem("character", character.value)
}


https://chess-tournament-api.devtest.ge/images/nona.jpg

// {
//     "name": "Beth Harmon",
//     "email": "beth@redberry.ge",
//     "phone": "598125819",
//     "date_of_birth": "10/20/1997",
//     "experience_level": "beginner",
//     "already_participated": true,
//     "character_id": 2
// }

// get characters photo and set to options in a dropdown
// document.addEventListener('DOMContentLoaded', () => {
// })

// change steps wizard style if user starts editing his data
function registrationContinue() {
    knowledgeSaving();
    experienceSaving();
    characterSaving();
    if(knowledge.value.length > 0 || character.value.length > 0){
        stepTwo.style.backgroundColor = '#E9FAF1';
        stepTwo.style.border = 'none';
    }else{
        stepTwo.style.backgroundColor = 'transparent';
        stepTwo.style.border = '1px solid #E5E6E8';
    }
}


// validate every form field in experience page after user clicks done button
function userExperiencesValidation() {
    if(knowledgeValidation() && characterValidation() && experienceValidation()){
        // send data to the server;
        // localStorage.clear(); 
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



