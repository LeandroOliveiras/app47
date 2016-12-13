var $botoes = document.querySelectorAll(".opcoesDoCartao-remove");

//criando contador
var contador = $(".cartao").length;
$(".novoCartao").submit(function(event){
    var campoConteudo = $(".novoCartao-conteudo");
    var conteudo = campoConteudo.val().trim()
                                      .replace(/\n/g, "<br>");
    if(conteudo){
      console.log(conteudo);
      adicionaCartao(conteudo)


    }
    campoConteudo.val("");

    event.preventDefault();
});

function adicionaCartao(conteudo, cor){
  //soma um no contador
      contador++;

      //Cria botão remover
      var botaoRemover = $("<button>").addClass("opcoesDoCartao-remove")
                                      .addClass("opcoesDoCartao-opcao")
                                      .attr("data-ref", contador)
                                      .text("Remover")
                                      .click(removeCartao);

      //cria a div de opcoes
      var opcoes = $("<div>").addClass("opcoesDoCartao")
                             .append(botaoRemover);

      //chamada para nova função
      var tipoCartao = decideTipoCartao(conteudo);

      var conteudoTag = $("<p>").addClass("cartao-conteudo")
                                .append(conteudo);

      $("<div>").attr("id", "cartao_" + contador)
              .addClass("cartao")
              .addClass(tipoCartao)
              .append(opcoes)
              .append(conteudoTag)
              .css("background-color", cor)
              .prependTo(".mural");
  }

  for(var i=0; i < $botoes.length; i++ )
  {
    $botoes[i].addEventListener("click", removeCartao);

  }

  //$removeCartoes.
  function removeCartao() {
    var cartao = document.querySelector("#cartao_" + this.getAttribute('data-ref'));

    //dá uma classe que faz ele sumir devagar
    cartao.classList.add('cartao--some');

    cartao.addEventListener('transitionend', function(){cartao.remove();})

  }

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
