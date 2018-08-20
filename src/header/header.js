import { loadPosts } from '../articles/articles.js';
import { init as initContact } from '../contact/contact.js';

document.querySelector('.link-home').addEventListener('click', evt => renderSection('home'));
document.querySelector('.link-about-us').addEventListener('click', evt => renderSection('about-us'));
document.querySelector('.link-contact').addEventListener('click', evt => renderSection('contact'));

const articlesTemplate = require('../articles/articles.handlebars');
const aboutUsTemplate = require('../about-us/about-us.handlebars');
const contactTemplate = require('../contact/contact.handlebars');

export const renderSection = section => {
  const contentDOM = document.querySelector('.section-content');
  if (section === 'home') {
    loadPosts();
    contentDOM.innerHTML = articlesTemplate();
  }
  if (section === 'about-us') {
    contentDOM.innerHTML = aboutUsTemplate();
  }
  if (section === 'contact') {
    contentDOM.innerHTML = contactTemplate();
    initContact();
  }
};