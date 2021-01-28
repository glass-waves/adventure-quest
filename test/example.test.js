// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { getUser, updateStats } from '../local-storage/user-local.js';
import { generateLocations } from '../utils/generate-locations.js';

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
        'completed': {}
    };
    localStorage.setItem('USER', JSON.stringify(user));

    const expected = {
        'name': 'Dylan',
        'character': 'activist',
        'sanity': 101,
        'media': 1,
        'deprogrammed': 1,
        'completed': {}
    };
    updateStats(1, 1, 1);
    const actual = getUser();
    expect.deepEqual(actual, expected);
});
//TEST for updateStats() function
test('should return a div with 5 spans inside, each a title of a quest', (expect) => {

    const expected = 	
    `<div class=\"title-div\"><a class=\"title-link\">A Festy Questy</a><a class=\"title-link\">Tussle with the Kraken</a><a class=\"title-link\">A Run in with Rudy</a><a class=\"title-link\">Alex Jones is Terrifying</a><a class=\"title-link\"></a></div>`;

    const actual = generateLocations();

    expect.equal(actual.outerHTML, expected);
});
