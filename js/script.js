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
listaFor.innerHTML += '<ul class="ul-for"></ul>';
let lista = el('.ul-for');
for (let i=0; i<listaSpesa.length; i++) {
  lista.innerHTML += `
  <li>${listaSpesa[i]}</li>
  `;  
}

const listaWhile = el('.lista-while');
listaWhile.innerHTML += '<ul class="ul-while"></ul>';
lista = el('.ul-while');

let i=0;

while (i < listaSpesa.length) {
  lista.innerHTML += `
  <li>${listaSpesa[i]}</li>
  `;
  i++;
}