import { quests } from '../data/quest-data.js';


export function generateLocations() {
    //bring in quests array and map to variables, each containing a quest object
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-div');
    titleDiv.style.position = 'relative';

    for (const quest of quests) {
        const titleLink = document.createElement('a');
        titleLink.classList.add('title-link');
        titleLink.textContent = quest.title;
        titleLink.style.position = 'absolute';
        titleLink.style.top = quest.position.top;
        titleLink.style.left = quest.position.left;
        titleLink.href = '../html/quest.html?id=' + quest.id;
        titleDiv.append(titleLink);
    }

    return titleDiv;
}