function listaView(success, click){
    const app = document.querySelector('.app');
    let contatos = ``
    success.forEach( contato => {
         contatos += 
       ` 
         <div class="contato">
            <div class="contato__circulo"></div>
            <div class="contato__texto">${contato.nome}</div>
            <div class="contato__seta">></div>
         </div>
 
       `
     });
    app.innerHTML = 
    ` 
       <header class="cabecalho">
            <h4 class="cabecalho__text">Empresas</h4>
       </header> 
       <div class="contatos">
            ${contatos}
       </div>
    
    `
    click(success);
    
}



function dadosContato(contatos, nome, click, ligar){
    const app = document.querySelector('.app');
    
    contatos.forEach( dados => {
            if(dados.nome == nome){
               let numeros = ``
               let dados1 = dados.telefones
               for(let i=0; i < dados1.length; i++){
                     numeros +=
                     `
                     <div class="perfil__lado">
                         <div class="perfil__numero n${i+1}">
                              <span id="tipoTelefone">${dados1[i].tipoTelefone}</span>
                              <span id="numero">${dados1[i].numero}</span>
                         </div>
                         <img src="./img/ligar.png">
                     </div>   

                     ` 
                }
                app.innerHTML = 
            ` 
               <header class="cabecalho">
                    <span class="contato__seta contato__seta_perfil"><</span>
                    <h4 class="cabecalho__text cabecalho__text_perfil">Empresas</h4>
               </header> 
               <div class="perfil">
                    <div class="perfil__foto"></div>
                    <div class="perfil__nome">
                         <span>${dados.nome}</span>
                         <span>${dados.dataNascimento}</span>
                    </div>
                    <div class="perfil__telefone">
                         <div class="perfil__titulo">
                              <span>INFORMAÇÕES</span>
                         </div>
                         <div class="perfil__informacoes">
                              <span>${dados.endereco.rua},${dados.endereco.numero}</span>
                              <span>${dados.endereco.complemento}</span>
                              <span>${dados.endereco.CEP}</span>
                              <span>${dados.endereco.bairro}</span>
                              <span>${dados.endereco.cidade} - ${dados.endereco.UF}</span>
                         </div>     
                    </div>

                    <div class="perfil__telefone">
                         <div class="perfil__titulo ">
                              <span>TELEFONE</span>
                         </div>
                         <div class="perfil__numeros">
                           ${numeros}
                         <div>     
                    </div>

                    
               </div>
            `
           }
       })
       document.querySelector('.contato__seta_perfil').addEventListener('click',()=>{
          listaView(contatos, click);
       })
       ligar();
}

function ligar(nome, tipo, numero){
     const app = document.querySelector('.app');
     app.innerHTML = 
            ` 
               <header class="cabecalho">
                    <h4 class="cabecalho__text">LIGANDO</h4>
               </header> 
               <div class="perfil">
                    <div class="perfil__fundo"></div>
                    <div class="perfil__ligar">
                         <span>${nome}</span>
                         <span>${tipo}</span>
                         <span>${numero}</span>
                         <img src="./img/desligar.png">
                    </div>
               </div>
            `
}


module.exports = { 
                    listaView,
                    dadosContato,
                    ligar 
                };