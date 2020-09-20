
// fetch('pessoas.json')
// .then( response => response.json())
// .then(jsonn => loadElements(jsonn));

axios('pessoas.json')
    .then(response => loadElements(response.data))

const resultado = document.querySelector('.resultado');

function loadElements(jsonn){
    const table = document.createElement('table');
    
    for (const pessoas of jsonn) {
        const tr = document.createElement('tr'); //cria linha
        
        let td = document.createElement('td'); //cria coluna nome
        td.innerHTML = pessoas.nome;
        tr.appendChild(td);
        
        td = document.createElement('td'); //cria coluna idade
        td.innerHTML = pessoas.idade
        tr.appendChild(td)

        td = document.createElement('td'); //cria coluna salario
        td.innerHTML = pessoas.salario
        tr.appendChild(td)

        td = document.createElement('td'); //cria coluna salario
        td.innerHTML = pessoas.empresa
        tr.appendChild(td)

        table.appendChild(tr)
    }
    resultado.appendChild(table)
    table.style.width = ' 80% '
}
