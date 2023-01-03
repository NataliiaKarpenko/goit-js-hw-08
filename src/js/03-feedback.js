import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const userData = {};
const getInfoFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

const fillFeedbackForm = () => {
  try {
    if (getInfoFromLS === null) {
      return;
    }

    for (const prop in getInfoFromLS) {
      feedbackFormRef.elements[prop].value = getInfoFromLS[prop];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFeedbackForm();

const handleFeedbackFormInput = e => {
  const { target } = e;
  userData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

feedbackFormRef.addEventListener(
  'input',
  throttle(handleFeedbackFormInput, 500)
);

const handleFeedbackFormSubmit = e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedbackFormRef.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormRef.addEventListener('submit', handleFeedbackFormSubmit);
