
import throttle from 'lodash.throttle';

const email = document.querySelector('.feedback-form input[name="email"]');
const message = document.querySelector(
  '.feedback-form textarea[name="message"]'
);
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

let formData = {};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(evt) {
  console.log(formData);
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {};
}

if (localStorage.getItem('feedback-form-state')) {
  try {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  email.value = formData.email || '';
  message.value = formData.message || '';
}

