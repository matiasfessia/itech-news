import './style.scss';
import './header/header.js';
import './newsletter/newsletter.js';
import * as Router from 'vanilla-router';
import { init as initHome } from './home/home.js';
import { init as initAboutUs } from './about-us/about-us.js';
import { init as initContact } from './contact/contact.js';

export const sectionWrapperDOM = document.querySelector('.section-wrapper');

export const router = new Router({
  mode: 'history',
  page404: function (path) {
    console.log('"/' + path + '" Page not found');
  }
});

router.add('/', () => initHome());
router.add('about-us', () => initAboutUs());
router.add('contact', () => initContact());

router.addUriListener();
router.navigateTo('/');