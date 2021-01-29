import { createResultString } from '../utils/result-parsing.js';
import { displayCurrentStats } from '../local-storage/user-local.js';

const resultsSection = document.getElementById('results-section');
const statsDiv = document.getElementById('stats-div');
const playAgain = document.getElementById('play-again');

statsDiv.append(displayCurrentStats());

const resultsParagraph = createResultString();
console.log(resultsParagraph);
resultsSection.append(resultsParagraph);

playAgain.addEventListener('click', () => {
    localStorage.removeItem('USER');
    window.location = '../index.html';
});