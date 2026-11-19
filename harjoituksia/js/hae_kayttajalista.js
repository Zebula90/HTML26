async function haeKayttajat() {

const response = await
fetch("https://dummyjson.com/users");

if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}
const data = await response.json();
const users = data.users;
console.log(users);

lisaaKayttajaListaan(users);
}

function lisaaKayttajaListaan(users) {
    const kaikki = document.querySelector('#kaikki');
    const lista = document.createElement("ul");
    for (const user of users) {
        const kayttaja = document.createElement("li");
        kayttaja.textContent = user.firstName + " " + user.lastName + " " + user.email;
        lista.append(kayttaja);
    }
    kaikki.append(lista);
}
haeKayttajat();