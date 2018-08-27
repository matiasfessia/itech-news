import * as axios from 'axios';
import { sectionWrapperDOM } from '../app.js';

const template = require('./home.handlebars');

export const init = () => {
  sectionWrapperDOM.innerHTML = template();
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      // process the first five posts and render each one
      const posts = response.data.slice(0, 5);
      const articlesDOM = document.querySelector('.home');
      articlesDOM.innerHTML = template({ posts });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}