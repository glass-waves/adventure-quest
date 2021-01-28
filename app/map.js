import { displayCurrentStats } from '../local-storage/user-local.js';
import { generateLocations } from '../utils/generate-locations.js';

const outerSection = document.getElementById('map-section');
const statsDiv = document.getElementById('stats-div');

outerSection.append(generateLocations());

statsDiv.append(displayCurrentStats());
