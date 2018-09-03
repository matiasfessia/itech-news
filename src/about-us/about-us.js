import * as axios from 'axios';
import { sectionWrapperDOM } from '../app.js';

const template = require('./about-us.handlebars');
export const init = () => {
  axios.get('http://localhost:3001/api/content/about-us')
  .then(function (response) {
    const templateData = {};
    if (typeof response.data.value !== 'undefined') {
      response.data.value.forEach(content => {
        templateData[content.code] = content.value;
      });
    }

    if (typeof templateData['about-us-meta-title'] !== 'undefined') {
      document.title = templateData['about-us-meta-title'];
    }

    sectionWrapperDOM.innerHTML = template(templateData);
  })
  .catch(function (error) {
    console.log(error);
  });
};