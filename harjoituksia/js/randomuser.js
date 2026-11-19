async function kayttajat() {
    const paikka = document.querySelector('#gridi');
    const url = 'https://randomuser.me/api/?results=50&gender=female&nat=fi';
    const lista = document.querySelector('#lista');
    const lista2 = document.querySelector('#lista2');

    try {
        const response = await fetch(url);
        const data = await response.json();
        const tiedot = data.results;
        console.log(tiedot);
        for (user of tiedot) {
            const ul_user = document.createElement('ul');
            const li_name = document.createElement('li');
            const li_gender = document.createElement('li');
            const li_email = document.createElement('li');
            li_name.textContent = `${user.name.first} ${user.name.last} `
            li_gender.textContent = `Gender:${user.gender}`
            li_email.textContent = ` ${user.email}`
            ul_user.append(li_name, li_gender, li_email);
            lista.append(ul_user);
        }
    } catch (error) {
        console.error(error);
    }
}
kayttajat();