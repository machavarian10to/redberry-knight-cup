const experienceSelectField = document.getElementById('experience-selectField');
const experienceSelectText = document.getElementById('experience-selectText');
const experienceOptions = document.getElementsByClassName('experience-options');
const experienceList = document.getElementById('experience-list');

const characterSelectField = document.getElementById('character-selectField');
const characterSelectText = document.getElementById('character-selectText');
const characterOptions = document.getElementsByClassName('character-options');
const characterList = document.getElementById('character-list');

const championship = document.getElementsByName('redberry-championship');

const experienceError = document.getElementById('experience-error');
const characterError = document.getElementById('character-error');
const championshipError = document.getElementById('championship-error');

const experienceIsSaved = localStorage.getItem('experience_level');
const characterIsSaved = localStorage.getItem('character');
const participateIsSaved = localStorage.getItem('already_participated');

const arrowIcon =  document.getElementById('arrowIcon');

const doneButton = document.getElementById('done-btn');
        
// get user infos if he already filled the form
if(experienceIsSaved) {
    experienceSelectText.innerHTML = experienceIsSaved;
}
if(characterIsSaved){
    characterSelectText.innerHTML = characterIsSaved;
}
// get grandmasters name and image from server and set it as options in dropdown
fetch('https://chess-tournament-api.devtest.ge/api/grandmasters')
    .then(res => res.json())
    .then(characters => {
        let li = '<p class="total-characters">(Total 4)</p>';
        characters.forEach(character => {
            li += `<li class="character-options" data='${character.id}'><p>${character.name}</p><img src="https://chess-tournament-api.devtest.ge/${character.image}" /></li>`
        });
        characterList.innerHTML += li;
    })
    .catch(err => console.log(err))

if(participateIsSaved){
    if(participateIsSaved === 'true'){
        championship[0].checked = true;
    }else{
        championship[1].checked = true;
    }
}

// custom dropdown for experience options
experienceSelectField.onclick = function() {
    experienceList.classList.toggle('hide')
    arrowIcon.classList.toggle('rotate')

    for(option of experienceOptions){
        option.onclick = function() {
            experienceError.style.display = 'none'
            experienceSelectText.innerHTML = this.textContent;
            localStorage.setItem("experience_level", this.textContent);
            experienceList.classList.toggle('hide');  
            arrowIcon.classList.toggle('rotate')
        }
    }
}

// custom dropdown menu to choose character
characterSelectField.onclick = function() {
    characterList.classList.toggle('hide')
    arrowIcon.classList.toggle('rotate')

    for(option of characterOptions){
        option.onclick = function() {
            let id = this.getAttribute('data');
            characterError.style.display = 'none';
            characterSelectText.innerHTML = this.textContent;
            localStorage.setItem("character", this.textContent);
            localStorage.setItem("character_id", id);
            characterList.classList.toggle('hide');  
            arrowIcon.classList.toggle('rotate');
        }
    }
}

// get info if user has already participated in championship 
function hasAlreadyParticipated() {
    championshipError.style.display = 'none';

    let already_participated;
    if(championship[0].checked){
        already_participated = true;
    }
    if(championship[1].checked){
        already_participated = false
    }
    localStorage.setItem('already_participated', already_participated)
}


// validate every form field after the user clicks done button
function userValidation() {
    if(experienceIsValid() && characterIsValid() && participateIsValid()){
        // send data to the server;
        fetch('https://chess-tournament-api.devtest.ge/api/register', {
            method: 'POST',
            body: JSON.stringify({
                "name": localStorage.getItem('name'),
                "email": localStorage.getItem('email'),
                "phone": localStorage.getItem('phone'),
                "date_of_birth": localStorage.getItem('date_of_birth'),
                "experience_level": localStorage.getItem('experience_level').toLowerCase(),
                "already_participated": JSON.parse(localStorage.getItem('already_participated')),
                "character_id": localStorage.getItem('character_id')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            return console.log(response.json()) 
        })
        .then(function(data) {
            console.log(data)
        })

        doneButton.onclick = window.location.href='/onboarding.html'
        localStorage.clear(); 
    }
    experienceIsValid();
    characterIsValid();
    participateIsValid();
}

function experienceIsValid() {
    if(!localStorage.getItem('experience_level')){
        experienceError.style.display = 'block';
        return false;
    }
    experienceError.style.display = 'none';
    return true;
}

function characterIsValid() {
    if(!localStorage.getItem('character_id')){
        characterError.style.display = 'block'
        return false;
    }
    characterError.style.display = 'none'
    return true;
}

function participateIsValid() {
    if(!localStorage.getItem('already_participated')){
        championshipError.style.display = 'block'
        return false;
    }
    championshipError.style.display = 'none'
    return true;
}