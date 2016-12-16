var controladorDeCartoes = (function(){
     "use strict";

//criando contador
//var contador = $(".cartao").length;
var contador = 0;
function adicionaCartao(conteudo, cor){
  //soma um no contador
      contador++;

      //Cria botão remover
      // var botaoRemover = $("<button>").addClass("opcoesDoCartao-remove")
      //                                 .addClass("opcoesDoCartao-opcao")
      //                                 .attr("data-ref", contador)
      //                                 .text("Remover")
      //                                 .click(removeCartao);

      //cria a div de opcoes
      // var opcoes = $("<div>").addClass("opcoesDoCartao")
      //                        .append(botaoRemover);

      var opcoes = criaOpcoesDoCartao(contador);

      //chamada para nova função
      var tipoCartao = decideTipoCartao(conteudo);

      var conteudoTag = $("<p>").addClass("cartao-conteudo")
                                .append(conteudo);

      $("<div>").attr("id", "cartao_" + contador)
              .attr("tabindex", 0)
              .addClass("cartao")
              .addClass(tipoCartao)
              .append(opcoes)
              .append(conteudoTag)
              .css("background-color", cor)
              .prependTo(".mural");
  }


  //$removeCartoes.
  // function removeCartao() {
  //   var cartao = document.querySelector("#cartao_" + this.getAttribute('data-ref'));
  //
  //   //dá uma classe que faz ele sumir devagar
  //   cartao.classList.add('cartao--some');
  //
  //   setTimeout(function(){
  //     cartao.remove();
  //     $(document).trigger("precisaSincronizar");
  //   }, 400);
  //
  //   cartao.addEventListener('transitionend', function(){cartao.remove();})
  //
  // }

  function decideTipoCartao(conteudo){
    var quebras = conteudo.split("<br>").length;
    var totalDeLetras = conteudo.replace(/<br>/g, " ").length;

    var ultimoMaior = "";
    conteudo.replace(/<br>/g, " ")
            .split(" ")
            .forEach(function(palavra){
              if(palavra.length > ultimoMaior.length){
                ultimoMaior = palavra;
              }
            });

    var tamMaior = ultimoMaior.length;

    //no mínimo, todo cartão tem o texto pequeno
    var tipoCartao = "cartao--textPequeno";

    if(tamMaior < 9 && quebras < 5 && totalDeLetras < 55){
      tipoCartao = "cartao--textGrande";
    }
    else if(tamMaior < 12 && quebras < 6 && totalDeLetras < 75){
        tipoCartao = "cartao--textoMedio";
    }

    return tipoCartao;
  }

  return {
      adicionaCartao: adicionaCartao
      , idUltimoCartao: function(){
          return contador;
        }
  }
})();
