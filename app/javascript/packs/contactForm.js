const callToAction = document.getElementById('call-contact-form');
const sendingBtn = document.getElementById('button-blue');
const formDiv = document.getElementById('form-main');

const openContactForm = () => {
  callToAction.addEventListener('click', () => {
    formDiv.style.display = 'flex';
    document.body.style.position = 'fixed';
  });
}

const closeContactForm = () => {
  sendingBtn.addEventListener('click', () => {
    formDiv.style.display = 'none';
    document.body.style.position = 'unset';
  });
  formDiv.addEventListener('click', (e) => {
    if (e.path[0].id === 'form-main') {
      formDiv.style.display = 'none';
      document.body.style.position = 'unset';
    };
  });
}

export { openContactForm, closeContactForm };
