var criaOpcoesDoCartao = (function(){
    "use strict";

    function removeCartao() {
      var cartao = document.querySelector("#cartao_" + this.getAttribute('data-ref'));

      //dá uma classe que faz ele sumir devagar
      cartao.classList.add('cartao--some');

      setTimeout(function(){
        cartao.remove();
        $(document).trigger("precisaSincronizar");
      }, 400);

      cartao.addEventListener('transitionend', function(){cartao.remove();})

    }

    var ehPraEditar = false;

    function toggleEdicao(){
        var cartao = $("#cartao_" + this.dataset.ref);
        var conteudo = cartao.find(".cartao-conteudo");

        if(ehPraEditar){
          ehPraEditar = false;
          conteudo.attr("contenteditable", false);
          conteudo.blur();
        }else{
          ehPraEditar = true;
          conteudo.attr("contenteditable", true);
          conteudo.focus();
        }
    }



    return function (idNovoCartao){
        var botaoRemove = $ ("<button>").addClass("opcoesDoCartao-remove")
                                        .addClass("opcoesDoCartao-opcao")
                                        .attr("data-ref", idNovoCartao)
                                        .text("Remover")
                                        .click(removeCartao);
        var botaoEdita = $ ("<button>").addClass("opcoesDoCartao-edita")
                                        .addClass("opcoesDoCartao-opcao")
                                        .attr("data-ref", idNovoCartao)
                                        .text("Editar")
                                        .click(toggleEdicao);
        var opcoes = $("<div>").addClass("opcoesDoCartao")
                               .append(botaoRemove)
                               .append(botaoEdita);
        return opcoes;


    }



})();
