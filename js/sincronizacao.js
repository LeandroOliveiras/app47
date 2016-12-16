(function(){

//Criação de um evento, no lugar do evento click
//$("#sync").click(function(){
$("document").on("precisaSincronizar", function(){
    $("#sync").removeClass("botaoSync--sincronizado");
    $("#sync").addClass("botaoSync--esperando")
});

$(document).on("precisaSincronizar", function(){
    var cartoes = [];

    $(".cartao").each(function(){
      var cartao = {};

      cartao.conteudo = $(this).find(".cartao-conteudo").text();
      cartao.cor = $(this).css("background-color");
      cartoes.push(cartao);

    });

    //escolha seu nome de usuário aqui

    var mural = {
        usuario: "loliveiras@gmail.com",
        cartoes: cartoes
    }

    $.ajax({
        url:"https://ceep.herokuapp.com/cartoes/salvar",
        method:"POST",
        data:mural,
        success:function(res){
          $("#sync").addClass("botaoSync--sincronizado")
          console.log(res.quantidade + " cartões salvos em "+ res.usuario);

          var quantidadeRemovidos= controladorDeCartoes.idUltimoCartao() -
                                                        res.quantidade

          console.log(quantidadeRemovidos + " cartões removidos");


        },
        error:function(){
          $("#sync").addClass("botaoSync--deuRuim")
          console.log("Não foi possível salvar o mural");
        },
        complete:function(){
          $("#sync").removeClass("botaoSync--esperando")

        }

    });

    var mural = {
        usuario: usuario,
        cartoes: cartoes
    }

});

$("#sync").click(function(){
    $(document).trigger("precisaSincronizar");
});

var usuario = "loliveiras@gmail.com";
$.getJSON("https://ceep.herokuapp.com/cartoes/carregar?callback=?",
        {usuario: usuario}, function(res){
          var cartoes = res.cartoes;

           console.log(cartoes.length + " carregados em " + res.usuario);
           cartoes.forEach(function(cartao){

           controladorDeCartoes.adicionaCartao(cartao.conteudo);
           });
        }
);
})()
