// open - close script
const openForm = () => (form_.className = 'form-oder');
const hideForm = e => {
  e.preventDefault();
  form_.className = 'form-oder is-hidden';
};

const form_ = document.querySelector('.form-oder');

document.querySelector('.oder__button').addEventListener('click', hideForm);

document.querySelector('.open-button').addEventListener('click', openForm);

document.querySelector('.open-button2').addEventListener('click', openForm);

document
  .querySelector('.oder-form__buton--close')
  .addEventListener('click', hideForm);


const q499 = document.getElementById('499');
const q799 = document.getElementById('799');
const q999 = document.getElementById('999');

const s499 = document.getElementById('499x');
const s799 = document.getElementById('799x');
const s999 = document.getElementById('999x');

const total = document.getElementById('total');

q499.addEventListener('input', () => {
  s499.value = (4.99 * q499.value).toFixed(2);
  total.value = Number(s499.value) + Number(s799.value) + Number(s999.value);
});
q799.addEventListener('input', () => {
  s799.value = (7.99 * q799.value).toFixed(2);
  total.value = Number(s499.value) + Number(s799.value) + Number(s999.value);
});
q999.addEventListener('input', () => {
  s999.value = (9.99 * q999.value).toFixed(2);
  total.value = Number(s499.value) + Number(s799.value) + Number(s999.value);
});
