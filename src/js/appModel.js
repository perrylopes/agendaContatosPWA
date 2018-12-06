function contatos($, listaContatos){
    $.ajax({
        url: "http://www.mocky.io/v2/5bdf4f3a310000ea149e4009",
        method: "get",
        dataType: "json",
        success: contatos => {
          listaContatos(contatos.contatos);
        },
      });
    
}

module.exports = {contatos}
