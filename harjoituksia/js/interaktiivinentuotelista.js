const form =
document.querySelector('#lomake');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    console.log(name);
});

const firstName = document.getElementsByClassName('firstname')[0];
const firstNameOutput = document.getElementsByClassName('first-name-output')[0];

const showFirstName = () => firstNameOutput.textContent = firstName.value;

firstname.addEventListener('keyup', showFirstName, false);
