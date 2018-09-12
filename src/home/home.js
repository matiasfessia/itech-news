import * as axios from 'axios';
import * as moment from 'moment';
import { sectionWrapperDOM } from '../app.js';

moment.locale('es');

const template = require('./home.handlebars');

export const init = () => {
  document.title = 'ITECH NEWS';
  sectionWrapperDOM.innerHTML = template();
  const loadingDOM = document.getElementById('loading');
  loadingDOM.classList.remove('hidden');
  axios.get('http://localhost:3001/api/posts')
    .then(function (response) {
      loadingDOM.classList.add('hidden');
      // process the first five posts and render each one
      let posts = response.data;
      // add formated date
      posts = posts.map(post => {
        post.formatedDate = moment(post.date).format('D [de] MMMM [del] YYYY');
        return post;
      });
      const articlesDOM = document.querySelector('.home');
      articlesDOM.innerHTML = template({ posts });
    })
    .catch(function (error) {
      loadingDOM.classList.add('hidden');
      console.log(error);
    });
}