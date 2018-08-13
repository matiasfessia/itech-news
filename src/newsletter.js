import * as axios from 'axios';

document.querySelector('#newsletter-btn').addEventListener('click', evt => {
  const emailDOM = document.querySelector('#newsletter-email');
  console.log('click en el boton registrarse: ', emailDOM.value);

  const content = `
    <h1>Hola administrador</h1>
    <p>Se ha subscripto una nuevo correo: ${emailDOM.value}
  `;

  const payload = {
    personalizations:
      [{
        to: [
          { email: 'matiasfessia@gmail.com', name: 'Matias Fessia' }
        ],
        subject: 'subscripcion al newsletter'
      }],
    from: { email: 'info@itechnews.com', name: 'ITECH NEWS' },
    content: [{ 'type': 'text/html', 'value': content }],
  };

  axios.post(
    'https://api.sendgrid.com/v3/mail/send',
    payload,
    {
      headers: {
        authorization: "Bearer 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"
      }
    })
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

