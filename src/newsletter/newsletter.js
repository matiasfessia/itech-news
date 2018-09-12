import * as axios from 'axios';

const template = require('./newsletter.handlebars');

// busco el contenido al server
axios.get('http://localhost:3001/api/content/newsletter')
.then(function (response) {
  const templateData = {};
  if (typeof response.data.value !== 'undefined') {
    response.data.value.forEach(content => {
      templateData[content.code] = content.value;
    });
  }

  document.querySelector('.newsletter').innerHTML = template(templateData);
  addListeners();
})
.catch(function (error) {
  console.log(error);
});

const addListeners = () => {
  document.querySelector('#newsletter-btn').addEventListener('click', evt => {
    const newsletterBtnTextDOM = document.querySelector('.newsletter-btn-text');
    const newsletterBtnSpinnerDOM = document.querySelector('.newsletter-btn-spinner');
    newsletterBtnTextDOM.classList.add('hidden');
    newsletterBtnSpinnerDOM.classList.remove('hidden');
    const emailDOM = document.querySelector('#newsletter-email');
    const payload = { email: emailDOM.value };
    axios.post('http://localhost:3001/api/newsletter-subscription', payload)
      .then(response => {
        newsletterBtnTextDOM.classList.remove('hidden');
        newsletterBtnSpinnerDOM.classList.add('hidden');
        if (response.status === 200) {
          alert('Se ha registrado con exito');
        }
      })
      .catch(error => {
        newsletterBtnTextDOM.classList.remove('hidden');
        newsletterBtnSpinnerDOM.classList.add('hidden');
        console.log('error detected: ', error);
        alert('Ups! Se ha producido un error. Vuelva a intentar.');
      });
  });
}
