'use strict'

var Ninja = (function(){
  var module = {};

  var errors = new NinjaErrors();

  module.ajax = function(json){
    var xhr = new XMLHttpRequest();

    var option = {
      url: json.url || errors.deuRuim('Passe uma url'),
      method: json.method || 'GET',
      success: json.success || errors.error('Não passou nada no Callback quando sucesso'),
      error: json.error
    }

    xhr.open(option.method, option.url);

    xhr.addEventListener('progress', function(){
      console.log('INDO');
    });

    xhr.addEventListener('load', function(){
      if(xhr.status.toString().match(/2[0-9]{2}/)){
        option.success();
      };
    });

    xhr.addEventListener('error', function(){
      option.error();
    });

    xhr.send();
  };

  return {
    ajax: module.ajax
  }
});
