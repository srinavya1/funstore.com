
'use strict ';
app.factory ('sessionservice',['',function(){
return {
set:function (key,value){

  return sessionstorage.setItem(key,value);
},
get:function (key){
  return sessionstorage.getItem(key);
},
destroy:function (key){

  return sessionstorage.removeItem(key,value);
}

   
};


}])

app.factory('Session', function($http) {
    return $http.get('/session.php').then(function(result) {
        return result.data;
    });

    });
