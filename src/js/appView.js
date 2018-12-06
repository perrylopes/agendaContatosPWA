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



function dadosContato(contatos, nome){
    const app = document.querySelector('.app');
    contatos.forEach( dados => {
            if(dados.nome == nome){
               let numeros = ``
               let dados1 = dados.telefones
               console.log(dados1);
                for(let i=0; i < dados1.length; i++){
                     numeros +=
                     `
                     <div class="perfil__lado">
                         <div class="perfil__numero n${i+1}">
                              <span>${dados1[i].tipoTelefone}</span>
                              <span>${dados1[i].numero}</span>
                         </div>
                         <img src="./img/ligar.png">
                     </div>   

                     ` 
                }
                app.innerHTML = 
            ` 
               <header class="cabecalho">
                    <span class="contato__seta contato__seta_perfil><</span>
                    <h4 class="cabecalho__text cabecalho__texto_perfil">Empresas</h4>
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

}




module.exports = { 
                    listaView,
                    dadosContato 
                };