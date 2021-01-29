/* eslint-disable no-useless-escape */
// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { getUser, updateStats } from '../local-storage/user-local.js';
import { generateLocations } from '../utils/generate-locations.js';
import { quests } from '../data/quest-data.js';
import { createChoice } from '../utils/create-choice.js';
const test = QUnit.test;

//TEST FOR getUser() function
test('should return the USER object from local storage', (expect) => {
    const user = {
        'name': 'Dylan',
        'character': 'activist',
        'sanity': 100,
        'media': 0,
        'deprogrammed': 0,
        'completed': {}
    };
    localStorage.setItem('USER', JSON.stringify(user));

    const expected = user;

    const actual = getUser();


    expect.deepEqual(actual, expected);
});

//TEST for updateStats() function
test('should return object with sanity, media and deprogrammed with one added to each', (expect) => {
    const user = {
        'name': 'Dylan',
        'character': 'activist',
        'sanity': 100,
        'media': 0,
        'deprogrammed': 0,
        'completed': {
        }
    };
    localStorage.setItem('USER', JSON.stringify(user));

    const expected = {
        'name': 'Dylan',
        'character': 'activist',
        'sanity': 101,
        'media': 1,
        'deprogrammed': 1,
        'completed': {
            california: true
        }
    };
    updateStats(1, 1, 1, 'california');
    const actual = getUser();
    expect.deepEqual(actual, expected);
});
//TEST for updateStats() function
test('should return a div with 5 spans inside, each a title of a quest', (expect) => {

    const expected = "<div class=\"title-div\" style=\"position: relative;\"><a class=\"title-link\" href=\"../html/quest.html?id=california\" style=\"position: absolute; top: 50%; left: 7%;\">✐A Festy Questy</a><a class=\"title-link\" href=\"../html/quest.html?id=virginia\" style=\"position: absolute; top: 50%; left: 67%;\">✐The Kraken Smackin'</a><a class=\"title-link\" href=\"../html/quest.html?id=new-york\" style=\"position: absolute; top: 35%; left: 90%;\">✐A Run-in with Rudy</a><a class=\"title-link\" href=\"../html/quest.html?id=texas\" style=\"position: absolute; top: 60%; left: 20%;\">✐Alex Jones is Scary</a></div>";
    const actual = generateLocations();

    expect.equal(actual.outerHTML, expected);
});


//test for createChoice() function 
test('when given a single choice from a quest choice array, it should return a label with a radio button and a span inside', (expect) => {
    const quest = quests[0];

    const actual = createChoice(quest.choices[0]);
    const expected = `<label class=\"choice\"><input type=\"radio\" name=\"choice\" value=\"fight\"><span>You take off his helmet and attempt to gore him with it to get him to stop talking.</span></label>`;
    expect.equal(actual.outerHTML, expected);
});