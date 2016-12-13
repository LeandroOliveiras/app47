//var $botoes = document.querySelectorAll(".opcoesDoCartao-remove");
// var $novoCartao = document.querySelector('.novoCartao');
// var $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo');
//
// $novoCartaoConteudo.addEventListener('input', function(){
//   var $error = document.querySelector('.error');
//   if($error){
//     $error.remove();
//   }
// });
// 
// $novoCartao.addEventListener('submit', function(event){
// //Não envia formulário
//   event.preventDefault();
//
//   if(this.querySelector('.novoCartao-conteudo').value == '' &&
//   !this.querySelector('.error')){
//       var $msgError = document.createElement('span');
//       $msgError.classList.add('error');
//       $msgError.textContent = 'Preencha o campo acima';
//
//       this.insertBefore($msgError, document.querySelector('.novoCartao-salvar'))
//
//   };
// });


// $mudaLayout.onclick = function(){
//   var mural = document.querySelector(".mural");
//
//   mural.classList.toggle("mural--linhas");
//
//   if(mural.classList.contains("mural--linhas")){
//     $mudaLayout.textContent = "Blocos";
//   }
//   else {
//     $mudaLayout.textContent = "Linha";
//   }
// };

// for(var i=0; i < $botoes.length; i++ )
// {
//   $botoes[i].addEventListener("click", removeCartao);
//
// }
//
// //$removeCartoes.
// function removeCartao() {
//   var cartao = document.querySelector("#cartao_" + this.getAttribute('data-ref'));
//
//   //dá uma classe que faz ele sumir devagar
//   cartao.classList.add('cartao--some');
//
//   cartao.addEventListener('transitionend', function(){cartao.remove();})
//
// }
//
// function decideTipoCartao(conteudo){
//   var quebras = conteudo.split("<br>").length;
//   var totalDeLetras = conteudo.replace(/<br>/g, " ").length;
//
//   var ultimoMaior = "";
//   conteudo.replace(/<br>/g, " ")
//           .split(" ")
//           .forEach(function(palavra){
//             if(palavra.length > ultimoMaior.length){
//               ultimoMaior = palavra;
//             }
//           });
//
//   var tamMaior = ultimoMaior.length;
//
//   //no mínimo, todo cartão tem o texto pequeno
//   var tipoCartao = "cartao--textPequeno";
//
//   if(tamMaior < 9 && quebras < 5 && totalDeLetras < 55){
//     tipoCartao = "cartao--textGrande";
//   }
//   else if(tamMaior < 12 && quebras < 6 && totalDeLetras < 75){
//       tipoCartao = "cartao--textoMedio";
//   }
//
//   console.log(tipoCartao);
//   return tipoCartao;
// }

// $("#ajuda").click(function(){
//   $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",
//         function(res){
//           console.log(res);
//
//           res.instrucoes.forEach(function(instrucao){
//             adicionaCartao(instrucao.conteudo, instrucao.cor);
//           });
//         }
//      );
//   });

  // function adicionaCartao(conteudo, cor){
  //   //soma um no contador
  //       contador++;
  //
  //       //Cria botão remover
  //       var botaoRemover = $("<button>").addClass("opcoesDoCartao-remove")
  //                                       .addClass("opcoesDoCartao-opcao")
  //                                       .attr("data-ref", contador)
  //                                       .text("Remover")
  //                                       .click(removeCartao);
  //
  //       //cria a div de opcoes
  //       var opcoes = $("<div>").addClass("opcoesDoCartao")
  //                              .append(botaoRemover);
  //       console.log("conteudo"+conteudo);
  //
  //       //chamada para nova função
  //       var tipoCartao = decideTipoCartao(conteudo);
  //
  //       var conteudoTag = $("<p>").addClass("cartao-conteudo")
  //                                 .append(conteudo);
  //
  //       $("<div>").attr("id", "cartao_" + contador)
  //               .addClass("cartao")
  //               .addClass(tipoCartao)
  //               .append(opcoes)
  //               .append(conteudoTag)
  //               .css("background-color", cor)
  //               .prependTo(".mural");
  //   }
