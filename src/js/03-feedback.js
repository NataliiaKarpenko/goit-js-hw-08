import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let userData = JSON.parse(localStorage.getItem(STORAGE_KEY));

fillFeedbackForm();
feedbackFormRef.addEventListener(
  'input',
  throttle(handleFeedbackFormInput, 500)
);
feedbackFormRef.addEventListener('submit', handleFeedbackFormSubmit);

function fillFeedbackForm() {
  try {
    if (!userData) {
      return;
    }

    for (const prop in userData) {
      feedbackFormRef.elements[prop].value = userData[prop];
    }
  } catch (error) {
    console.error('Error.message ', error.message);
  }
}

function handleFeedbackFormInput(e) {
  userData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  const { target } = e;
  const name = target.name;
  const value = target.value;
  userData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
}

function handleFeedbackFormSubmit(e) {
  e.preventDefault();

  if (!userData.email || !userData.email) {
    alert('Fill in all the fields');
    return;
  }

  console.log(userData);
  feedbackFormRef.reset();
  localStorage.removeItem(STORAGE_KEY);
}
