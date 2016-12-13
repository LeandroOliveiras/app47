// //criando contador
// var contador = $(".cartao").length;
// $(".novoCartao").submit(function(event){
//     var campoConteudo = $(".novoCartao-conteudo");
//     var conteudo = campoConteudo.val().trim()
//                                       .replace(/\n/g, "<br>");
//     if(conteudo){
//
//       adicionaCartao(conteudo)
//
//     }
//     campoConteudo.val("");
//
//     event.preventDefault();
// });
//
// $("#busca").on("input", function(){
//   //guarda valor digitado, removendo espaços extras
//   var busca = $(this).val().trim();
//
//   if(busca.length){
//     $(".cartao").hide().filter(function()
//     {
//       return $(this).find(".cartao-conteudo")
//                     .text()
//                     .match(new RegExp(busca, "i"));
//
//     }).show();
//
//   }else{
//     $(".cartao").show();
//   }
//
// });

// (function(){
//
// $("#sync").click(function(){
//     $("#sync").removeClass("botaoSync--sincronizado");
//     $("#sync").addClass("botaoSync--esperando")
//
//     var cartoes = [];
//
//     $(".cartao").each(function(){
//       var cartao = {};
//
//       cartao.conteudo = $(this).find(".cartao-conteudo").text();
//       cartoes.push(cartao);
//
//     });
//
//     //escolha seu nome de usuário aqui
//
//     var mural = {
//         usuario: "loliveiras@gmail.com",
//         cartoes: cartoes
//     }
//
//     $.ajax({
//         url:"https://ceep.herokuapp.com/cartoes/salvar",
//         method:"POST",
//         data:mural,
//         success:function(res){
//           $("#sync").addClass("botaoSync--sincronizado")
//           console.log(res.quantidade + " cartões salvos em "+ res.usuario);
//
//         },
//         error:function(){
//           $("#sync").addClass("botaoSync--deuRuim")
//           console.log("Não foi possível salvar o mural");
//         },
//         complete:function(){
//           $("#sync").removeClass("botaoSync--esperando")
//
//         }
//
//     });
//
//     var mural = {
//         usuario: usuario,
//         cartoes: cartoes
//     }
//
// });
//
// var usuario = "loliveiras@gmail.com";
// $.getJSON("https://ceep.herokuapp.com/cartoes/carregar?callback=?",
//         {usuario: usuario}, function(res){
//           var cartoes = res.cartoes;
//           console.log(res);
//           console.log(cartoes.length + "carregados em " + res.usuario);
//            cartoes.forEach(function(cartao){
//               console.log(cartao);
//               adicionaCartao(cartao.conteudo);
//            });
//         }
// );
// })()
