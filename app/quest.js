import { quests } from '../data/quest-data.js';
import { checkForGameOver, displayCurrentStats, updateStats } from '../local-storage/user-local.js';
import { createChoice } from '../utils/create-choice.js';
import { findById } from '../utils/find-by-id.js';
// grab dom elements
const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const choicesForm = document.getElementById('choices');
const choicesDiv = document.getElementById('choices-div');
const resultsDiv = document.getElementById('results');
const backButton = document.getElementById('back');
const statsDiv = document.getElementById('stats-div');

statsDiv.append(displayCurrentStats());
//grab id from url
const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
//use this id to find which quest was selected from quests array
const thisQuest = findById(quests, questId);
//if it doesnt exist, return to the map page
if (!thisQuest) window.location = './map.html';
//fill in the title, image and description with data from data page
questTitle.textContent = thisQuest.title;
questImage.src = `../assets/${thisQuest.image}`;
questDescription.textContent = thisQuest.description;
//loop through all choices and generate a radio button and span 
for (const choice of thisQuest.choices) {
    const choiceNode = createChoice(choice);
    choicesDiv.append(choiceNode);    
}
//append choices to form
choicesForm.prepend(choicesDiv);
//grab form element
const myForm = document.getElementById('choices');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //create new form data instance from myForm
    const formData = new FormData(myForm);

    //find the selected choice ID by "getting" the name(choice)
    const choiceID = formData.get('choice');
    //find the selected choice in the choices array using choice ID
    const choice = findById(thisQuest.choices, choiceID);
    //create a paragraph element for the results
    const results = document.createElement('p');
    //set results text content to the result text from the data file for selected choice
    results.textContent = choice.result;
    //append result to result div
    resultsDiv.prepend(results);
    //show results div by removing hidden class
    resultsDiv.classList.remove('hidden');
    resultsDiv.style.fontStyle = 'italic';
    //add hidden class to choices
    choicesForm.classList.add('hidden');
    //update stats
    const sanity = choice.sanity;
    const media = choice.media;
    const deprogram = choice.deprogram;
    updateStats(sanity, media, deprogram, thisQuest.id);
    statsDiv.textContent = '';
    statsDiv.append(displayCurrentStats());
    checkForGameOver();
});

backButton.addEventListener('click', () => {
    window.location = './map.html';
});