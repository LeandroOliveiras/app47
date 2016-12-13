var $novoCartao = document.querySelector('.novoCartao');
var $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo');

$novoCartaoConteudo.addEventListener('input', function(){
  var $error = document.querySelector('.error');
  if($error){
    $error.remove();
  }
});

$novoCartao.addEventListener('submit', function(event){
//Não envia formulário
  event.preventDefault();

  if(this.querySelector('.novoCartao-conteudo').value == '' &&
  !this.querySelector('.error')){
      var $msgError = document.createElement('span');
      $msgError.classList.add('error');
      $msgError.textContent = 'Preencha o campo acima';

      this.insertBefore($msgError, document.querySelector('.novoCartao-salvar'))

  };
});
