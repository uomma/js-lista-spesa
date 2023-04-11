'use:script'

const input = prompt('inserisci un cibo')
const listaSpesa = ['uova','pollo','patate','yogurt', 'mandorle', 'pane'];

const ul = document.getElementById('listaSpesa');
console.log(ul);
/* 

for(let i = 0; i < listaSpesa.length; i++){
console.log(listaSpesa[i]);
const listItem = document.createElement('li');
listItem.append(listaSpesa[i]);
ul.append(listItem)
}
 */
let i = 0;
while(i < listaSpesa.length){
    input=Number(prompt('inserisci un cibo'));
    console.log(input)
}



console.log('arrivederci')
