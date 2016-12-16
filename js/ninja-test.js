(function(){
'use strict'

  var n = Ninja();

  n.ajax({
    url: 'https://ceep.herokuapp.com/cartoes/instrucoes',
    method:'GET',
    success: function(){
      console.log('success');
    },
    error : function(){
        console.log('success');
    }

  })

})();
