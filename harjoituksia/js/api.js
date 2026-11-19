const form = document.querySelector("#form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const kaupunki = data.get('name');

    async function saatiedot() {
        const paikka = document.querySelector('#sää');
        const url = 'https://open-weather13.p.rapidapi.com/city?city=helsinki&lang=EN';
        const newurl = url.replace("helsinki", kaupunki);
        const optiot = {
            method: "GET",
            headers: {
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
                'x-rapidapi-key': '6cd6b72934msh88fb3cf4bb49a13p138af3jsn0842e80639be'
            }            
        };
        try {
            const response = await fetch(newurl, optiot);
            const data = await response.json();
            const tiedot = data.main;
            console.log(tiedot);
            paikka.textContent = `Lämpötila celsiuksina ${(tiedot.temp -32) / 1.8};`
        } catch (error) {
            console.error(error);
        }
    }
    saatiedot();
});
