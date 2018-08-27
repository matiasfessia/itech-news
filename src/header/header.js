import { router } from '../app.js';
document.querySelector('.link-home').addEventListener('click', evt => router.navigateTo('/'));
document.querySelector('.link-about-us').addEventListener('click', evt => router.navigateTo('about-us'));
document.querySelector('.link-contact').addEventListener('click', evt => router.navigateTo('contact'));