// localStorage: lue tallennetut tuotteet
const STORAGE_KEY = "todo-tasks";
let tuotteet = [];

function lataaTuotteet() {
  try {
    const tallennetut = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    tuotteet = Array.isArray(tallennetut) ? tallennetut : [];
  } catch (virhe) {
    console.error("Tallennettuja tuotteita ei voitu lukea:", virhe);
    tuotteet = [];
  }
}

// localStorage: tallenna tuotteet
function tallennaTuotteet() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tuotteet));
}

export { lataaTuotteet, tallennaTuotteet};