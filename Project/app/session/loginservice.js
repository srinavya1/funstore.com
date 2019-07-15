'use Strict';
app.factory('loginService',function($http,$location,sessionservice){
return{
login:function (data,scope)
{
var $promise=$http.post('data/user.php',data);
$promise.then(function(msg){
var uid=msg.data;
if(uid){
sessionservice.set('user',uid);
  $state.go("customerfunctions");
}
else {
  $state.go("login");
}

});

},
login:function (data,scope)
{
sessionservice.destroy('user');
$state.go("login");
}

})
