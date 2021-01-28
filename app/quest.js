import { quests } from '../data/quest-data.js';
import { findById } from '../utils/find-by-id.js';

const searchParams = new URLSearchParams(window.location.search);

const questId = searchParams.get('id');

const thisQuest = findById(quests, questId);

if (!thisQuest) window.location = './map.html';
const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const choicesForm = document.getElementById('choices');
const choicesDiv = document.getElementById('choices-div');

questTitle.textContent = thisQuest.title;
questImage.src = `../assets/${thisQuest.image}`;
questDescription.textContent = thisQuest.description;


console.log(thisQuest);