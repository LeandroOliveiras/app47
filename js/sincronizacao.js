(function(){

$("#sync").click(function(){
    $("#sync").removeClass("botaoSync--sincronizado");
    $("#sync").addClass("botaoSync--esperando")

    var cartoes = [];

    $(".cartao").each(function(){
      var cartao = {};

      cartao.conteudo = $(this).find(".cartao-conteudo").text();
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

var usuario = "loliveiras@gmail.com";
$.getJSON("https://ceep.herokuapp.com/cartoes/carregar?callback=?",
        {usuario: usuario}, function(res){
          var cartoes = res.cartoes;

           console.log(cartoes.length + " carregados em " + res.usuario);
           cartoes.forEach(function(cartao){

           adicionaCartao(cartao.conteudo);
           });
        }
);
})()
