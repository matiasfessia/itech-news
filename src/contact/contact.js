export const init = () => {
  document.querySelector('#contact-btn').addEventListener('click', evt => {
    const nameDOM = document.querySelector('#contact-name');
    const emailDOM = document.querySelector('#contact-email');
    const messageDOM = document.querySelector('#contact-message');
    console.log('enviando mensaje');
  });
}
