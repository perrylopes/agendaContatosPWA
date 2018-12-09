let arquivo = [
  "/",
  "css/app.min.css",
  "js/app.min.js",
  "img/ligar.png",
  "img/desligar.png",
]
self.addEventListener("install", function(){
  caches.open("arquivos").then(cache => {
  cache.addAll(arquivo)
  })
})


/*
self.addEventListener("fetch", function(event){

    let pedido = event.request
    let promiseResposta = caches.open("ceep-imagens").then(cache => {
      return cache.match(pedido)
    }).then(respostaCache => {
      let resposta = respostaCache ? respostaCache : fetch(pedido)
      return resposta
    })  
    event.respondWith(promiseResposta)
  
    })*/
    
    self.addEventListener("fetch", function(event){

      let pedido = event.request
      let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
        })
    
        event.respondWith(promiseResposta)
    
      })