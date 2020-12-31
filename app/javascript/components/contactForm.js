const openContactForm = () => {
  const callToAction = document.querySelectorAll('.call-contact-form');
  const formDiv = document.getElementById('form-main');

  callToAction.forEach(btn => {
    btn.addEventListener('click', () => {
      formDiv.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  })
}

const closeContactForm = () => {
  const formDiv = document.getElementById('form-main');
  formDiv.addEventListener('click', (e) => {
    if (e.target.id === 'form-main') {
      formDiv.style.display = 'none';
      document.body.style.overflow = 'unset';
    };
  });
}

const messageSent = () => {
  const formDiv = document.getElementById('form-main');
  formDiv.style.display = 'none';
  document.body.style.overflow = 'unset';
}

export { openContactForm, closeContactForm, messageSent };
