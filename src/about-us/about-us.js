import { sectionWrapperDOM } from '../app.js';

const template = require('./about-us.handlebars');
export const init = () => sectionWrapperDOM.innerHTML = template();