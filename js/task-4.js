const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };

  if (
    event.target.email.value.trim() === '' ||
    event.target.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    console.log(info);
    event.target.reset();
  }
}
