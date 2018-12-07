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
        view.dadosContato(contatos, nome, click, ligar);
    });
    
}

function ligar(){
    document.querySelector('.perfil__numeros').addEventListener('click',function(){
        let tipoTelefone = event.target.parentNode.querySelector('#tipoTelefone').textContent;
        let numero = event.target.parentNode.querySelector('#numero').textContent;
        let nome = document.querySelector('.perfil__nome > span').textContent;
        view.ligar(nome,tipoTelefone,numero, desligar);
        });
}

function desligar(){
        document.getElementById('desligar').addEventListener('click', function(){
            view.desligar();
        })

}

    

