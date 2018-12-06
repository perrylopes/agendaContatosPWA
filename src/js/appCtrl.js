const $ = require('jquery');
const model = require('./appModel')
const view = require("./appView");


model.contatos($, listaContatos);
function listaContatos(sucess){
    view.listaView(sucess, click);
}

function click(contatos){
    document.querySelector('.contatos').addEventListener('click', function(event){
        let nome = event.target.parentNode.querySelector('.contato__texto').textContent;
        view.dadosContato(contatos, nome);
    });
    
}