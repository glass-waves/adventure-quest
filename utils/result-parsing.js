import { getUser } from '../local-storage/user-local.js';

function sanityParse(sanityLevel) {
    let sanityString = '';
    if (sanityLevel <= 0) {
        sanityString = ' you lost your marbles and may never find them again.';
    } else if (sanityLevel <= 30) {
        sanityString = ' you are one more Fox News broadcast away from insanity, proceed with caution.';
    } else if (sanityLevel <= 70) {
        sanityString = ' your mental health fared surprisingly well considering the circumstances.';
    } else {
        sanityString = ' your mind is like a steel trap, impenetrable by even the most seasoned insurrectionist.';
    }
    return sanityString;
}

function mediaParse(mediaLevel) {
    let mediaString = '';
    if (mediaLevel <= 0) {
        mediaString = ' You went almost completely undetected by the media.';
    } else if (mediaLevel <= 30) {
        mediaString = " Your name made it on to some low level conservative twitters, though don't worry, they are probably just russian bots.";
    } else if (mediaLevel <= 70) {
        mediaString = ' You got doxed by Andy Ngo and the Proud Boys know you by name. I would be careful where you go alone until this thing blows over.';
    } else {
        mediaString = ' Tucker Carlson is calling for your beheading on cable news. You managed to make a real fuss, congrats I guess?';
    }
    return mediaString;
}

function deprogramParse(deprogrammed) {
    const deprogrammedString = `you managed to convert ${deprogrammed} QAnon followers.`;
    return deprogrammedString;
}

export function createResultString() {
    const currentStats = getUser();
    const resultsPara = document.createElement('p');

    const resultString = `Well ${currentStats.name}, I didn't expect an outcome like this from a ${currentStats.character} like you. After traveling the country, trying to change the minds of some real bat shit crazies, ${sanityParse(currentStats.sanity)} ${mediaParse(currentStats.media)} Despite all of this, ${deprogramParse(currentStats.deprogrammed)} It probably won't change a thing, but we can only hope for the best! See you next time.`;

    resultsPara.textContent = resultString;

    return resultsPara;
}