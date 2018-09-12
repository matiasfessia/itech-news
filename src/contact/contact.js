import { sectionWrapperDOM } from '../app.js';
import * as axios from 'axios';

const template = require('./contact.handlebars');

export const init = () => {
  axios.get('http://localhost:3001/api/content/contact')
  .then(function (response) {
    const templateData = {};
    if (typeof response.data.value !== 'undefined') {
      response.data.value.forEach(content => {
        templateData[content.code] = content.value;
      });
    }

    if (typeof templateData['contact-meta-title'] !== 'undefined') {
      document.title = templateData['contact-meta-title'];
    }
    
    console.log(templateData);
    sectionWrapperDOM.innerHTML = template(templateData);
    addListeners();
  })
  .catch(function (error) {
    console.log(error);
  });

  
}


const addListeners = () => {
  // add the listener on button form
  document.querySelector('#contact-btn').addEventListener('click', evt => {
    const contactBtnTextDOM = document.querySelector('.contact-btn-text');
    const contactBtnSpinnerDOM = document.querySelector('.contact-btn-spinner');
    contactBtnTextDOM.classList.add('hidden');
    contactBtnSpinnerDOM.classList.remove('hidden');
    const payload = {
      name: document.querySelector('#contact-name').value,
      email: document.querySelector('#contact-email').value,
      message: document.querySelector('#contact-message').value,
    };
    axios.post('http://localhost:3001/api/contact-message', payload)
      .then(response => {
        contactBtnTextDOM.classList.remove('hidden');
        contactBtnSpinnerDOM.classList.add('hidden');
        if (response.status === 200) {
          alert('Se ha registrado con exito');
        }
      })
      .catch(error => {
        contactBtnTextDOM.classList.remove('hidden');
        contactBtnSpinnerDOM.classList.add('hidden');
        console.log('error detected: ', error);
        alert('Ups! Se ha producido un error. Vuelva a intentar.');
      });
  });
}