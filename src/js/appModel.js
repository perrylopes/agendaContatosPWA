function contatos($, listaContatos){
  $.ajax({
        url: "http://www.mocky.io/v2/5bdf4f3a310000ea149e4009",
        method: "get",
        dataType: "json",
        success: contatos => { 
           localStorage.setItem('contatos', JSON.stringify(contatos.contatos))
           listaContatos(contato = JSON.parse(localStorage.getItem('contatos')));
          },
           error: function() {
            listaContatos(contato = JSON.parse(localStorage.getItem('contatos')));   
        },
      });
   
}

module.exports = {contatos}
