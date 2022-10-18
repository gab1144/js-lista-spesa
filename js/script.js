const listaSpesa = [
  "pasta", 
  "pane", 
  "frutta", 
  "verdura", 
  "pollo", 
  "coca cola"
];

const el = document.querySelector.bind(document);

const listaFor = el('.lista-for');

for (let i=0; i<listaSpesa.length; i++) {
  listaFor.innerHTML += `
  <li>${listaSpesa[i]}</li>
  `;  
}