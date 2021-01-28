import { generateLocations } from '../utils/generate-locations.js';

const outerSection = document.getElementById('map-section');

outerSection.append(generateLocations());
