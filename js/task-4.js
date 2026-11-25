const fromLogin = document.querySelector('.login-form');

fromLogin.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const emailValue = formData.get('email').trim();
  const passwordValue = formData.get('password').trim();

  if (emailValue.length === 0 || passwordValue.length === 0) {
    alert('All form fields must be filled in');
    return;
  }

  const object = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(object);
  fromLogin.reset();
});
