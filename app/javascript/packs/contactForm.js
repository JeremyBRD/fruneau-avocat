const callToAction = document.querySelectorAll('.call-contact-form');
const sendingBtn = document.getElementById('sending-btn');
const formDiv = document.getElementById('form-main');

const openContactForm = () => {
  callToAction.forEach(btn => {
    btn.addEventListener('click', () => {
      formDiv.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  })
}

const closeContactForm = () => {
  sendingBtn.addEventListener('click', () => {
    formDiv.style.display = 'none';
    document.body.style.overflow = 'unset';
  });
  formDiv.addEventListener('click', (e) => {
    if (e.path[0].id === 'form-main') {
      formDiv.style.display = 'none';
      document.body.style.overflow = 'unset';
    };
  });
}

export { openContactForm, closeContactForm };
