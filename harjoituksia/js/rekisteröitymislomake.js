const form =
document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    const password2 =
    document.querySelector('#password2')
    data.get('password2')
    const ehdot = 
    document.querySelector('#ehdot');
    if (ehdot.checked)  {
        console.log("Ehdot hyväksytty!");
    }
    password2.addEventListener('input', () => {
        if (password2.value !== password.value) {
            password2.setCustomValidity('Salasanat eivät ole samat!');
        } else {
            password2.setCustomValidity('');
        }
    })
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(password2);
    console.log(ehdot.value);
});