var $mudaLayout = document.querySelector("#mudaLayout");
$mudaLayout.onclick = function(){
  var mural = document.querySelector(".mural");

  mural.classList.toggle("mural--linhas");

  if(mural.classList.contains("mural--linhas")){
    $mudaLayout.textContent = "Blocos";
  }
  else {
    $mudaLayout.textContent = "Linha";
  }
};
