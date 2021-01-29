import { capitalizeFirstLetter } from '../utils/find-by-id.js';

const USER = 'USER';

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}
export function getUser() {
    const stringyUser = localStorage.getItem(USER);
    const user = JSON.parse(stringyUser);
    return user;
}
export function updateStats(sanity, media, deprogrammed, questId) {
    const user = getUser();
    user.sanity += sanity;
    user.media += media;
    user.deprogrammed += deprogrammed;
    user.completed[questId] = true;
    setUser(user);
}
export function displayCurrentStats() {
    const currentUserObject = getUser();
    console.log(currentUserObject);
    const statDiv = document.createElement('div');
    const characterName = document.createElement('p');
    const characterClass = document.createElement('p');
    const characterSanity = document.createElement('p');
    const characterMedia = document.createElement('p');
    const characterDeprogrammed = document.createElement('p');

    characterName.textContent = `Name: ${currentUserObject.name}`;
    characterClass.textContent = `Character:${capitalizeFirstLetter(currentUserObject.character)}`;
    characterSanity.textContent = `Sanity Remaining: ${currentUserObject.sanity}`;
    characterMedia.textContent = `Media Exposure: ${currentUserObject.media}`;
    characterDeprogrammed.textContent = `Loonies Deprogrammed: ${currentUserObject.deprogrammed}`;

    statDiv.append(characterName, characterClass, characterSanity, characterMedia, characterDeprogrammed);

    return statDiv;
}

export function checkForGameOver() {
    const currentUserStats = getUser();
    if (currentUserStats.sanity <= 0) {
        alert('These people have made you lose your damn mind. Proceed to you results.');
        window.location = './results.html';
    }
    if (currentUserStats.completed.length === 4) {
        alert('Congrats, you have made it through without going completely insane. Proceed to your results.');
    }
}

