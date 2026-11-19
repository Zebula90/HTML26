async function kayttajat() {
    const paikka = document.querySelector('#lista');
    const url = 'https://randomuser.me/api/?results=18&&nat=fi';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const tiedot = data.results;
        console.log(tiedot);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        for (user of tiedot) {
            const user_list = document.createElement('ul');
            const li_name = document.createElement('li');
            const li_city = document.createElement('li');
            const li_email = document.createElement('li');
            li_name.textContent = `${user.name.first} ${user.name.last} `
            li_city.textContent = `${user.location.city}`
            li_email.textContent = ` ${user.email}`
            user_list.append(li_name, li_city, li_email);
            paikka.append(user_list);
        }
    } catch (error) {
        console.error (error);
}}
kayttajat();


