const form = document.getElementById('form-contato');

let linhas = '';


form.addEventListener('submit' , function(e){
    e.preventDefault();

    addLinha();
    attTable();
});

function addLinha(){
    const nomeContato = document.getElementById('nome-contato');
    const phone = document.getElementById('telefone');  
    const ddd = document.getElementById('ddd');  
  

    let line = `<tr>`;
    line += `<td>${nomeContato.value}</td>`;
    line += `<td>${ddd.value}</td>`;
    line += `<td>${phone.value}</td>`;
    line += `</tr>`;

    linhas += line
    

    nomeContato.value = '';
    phone.value = '';
};

function attTable(){    
    const corpoTabela = document.querySelector('#corpo');
    corpoTabela.innerHTML = linhas;
};

