import * as axios from 'axios';
const articles = document.querySelector('.articles');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // clean the articles
    articles.innerHTML = '';

    // process the first five posts and render each one
    const posts = response.data.slice(0, 5);
    renderPosts(posts);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

const renderPosts = (posts) => {
  articles.innerHTML = `
    ${posts.map(post => 
      `<article>
        <h1>${post.title}</h1>
        <p>${post.body}</p>
      </article>`
    ).join('')}
  `;
}