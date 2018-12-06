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
                console.log(dados);
                app.innerHTML = 
            ` 
               <header class="cabecalho">
                    <span><</span>
                    <h4 class="cabecalho__text">Empresas</h4>
               </header> 
               <div class="perfil">
                    ${dados.nome}
                    ${dados.dataNascimento}
                    ${dados.endereco.rua},${dados.endereco.numero}
                    ${dados.endereco.CEP}
                    ${dados.endereco.bairro}
                    ${dados.endereco.cidade} - ${dados.endereco.UF}
                    
               </div>
            `
           }
       })

}




module.exports = { 
                    listaView,
                    dadosContato 
                };