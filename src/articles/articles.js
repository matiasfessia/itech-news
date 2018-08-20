import * as axios from 'axios';
const template = require('./articles.handlebars');

export const loadPosts = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      // process the first five posts and render each one
      const posts = response.data.slice(0, 5);
      const articlesDOM = document.querySelector('.articles');
      articlesDOM.innerHTML = template({ posts });

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}