const objektit = [
    {nimi: "HTML", taso: "aloittelija", aktiivinen: "kyllä" },
    {nimi: "CSS", taso: "aloittelija", aktiivinen: "kyllä" },
    {nimi: "JS", taso: "aloittelija", aktiivinen: "kyllä" },
    {nimi: "Python", taso: "mestari", aktiivinen: "ei" },
    {nimi: "SQL", taso: "aloittelija", aktiivinen: "kyllä" }
]

const lista = document.querySelector("#lista")

for (const koulutus of objektit) {
    const li = document.createElement('li');
    li.textContent = koulutus.nimi + " " + koulutus.taso;
    lista.append(li);
    if (koulutus.aktiivinen === "kyllä") {
        li.classList.add("aktiivinen")
    }
}
 