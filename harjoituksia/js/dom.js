// Harjoitus 1 
const otsikko =
document.querySelector('#title');
otsikko.textContent = "Dom toimii!!"

const tila =
document.querySelector('.status');
tila.textContent = "Valmis!"


// Harjoitus 2

const kielet = ['HTML', 'CSS', 'JavaScript'];
const lista = document.querySelector('#languages');

for (kieli of kielet) {
    const li = document.createElement('li');
    li.textContent = kieli;
    lista.append(li);
}

// Harjoitus 3

const tuote = {
  nimi: 'Näppäimistö',
  hinta: 79,
  saatavilla: true
};

const tuotekortti =
document.querySelector('#teksti');
tuotekortti.textContent = tuote.nimi

