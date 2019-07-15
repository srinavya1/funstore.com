
(function(){
    var login=angular.module('login',[]);
  //  angular.module("login", []);

    //angular.module("login").controller("loginCtrl", ["$state",loginCtrl]);
/*
    app.factory('Session', function($http) {
    return $http.get('/session.php').then(function(result) {
        return result.data;
    });
});*/
    login.controller('loginCtrl',function($rootScope,$scope,$http,$state)
    {

      if($rootScope.custid!=null)
      {
        console.log('user id : '+$rootScope.custid);
      $state.go("customerfunctions");

      }
      $scope.signup=function()
      {
        console.log('sign up clicked');

        $state.go("signup");

      }

      $scope.sessionchecker=function ()
      {
        console.log('inside session checker');
        $http.get("./app/login/sessionchecker.php").then(function(response){
        console.log(JSON.stringify(response));

        console.log('resp'+response);
       //$sco//pe.testvalue1=response;
        });



      }
//$scope.sessionchecker();


/*
      Session.then(function(response){
              $rootScope.session = response;
          });
*/

console.log('inside');

    $scope.login_f=function (){
      console.log('inside fcn');
        var lo = this;

  var config={method:'POST',
                   url:'./app/login/loginvalidate.php',
                    data:{username:   $scope.username,
                          password:$scope.password}};
                        /*  var config={method:'POST',
                                       url:'./app/login/loginvalidate.php',
                                       data:{username:   'pradeep',
                                             password: 'pradeep'}};*/
/*******************************************************************end begins/////////////////////////*/
       var req=$http(config);
       req.then(function(success)
         {
           console.log('response'+ success.data);
           console.log("jason str"+JSON.stringify(success.data));
//var data=parseInt(success.data);

             //lo.goToCustomerFunctions = function()
              if(success.data==0)
               {console.log("flase case");
                 $state.go("login");
                // lo.goToCustomerFunctions = function()
                 }

             else
             {
               var data=[];
               data=success.data;
               console.log('inesle  '+data.length+'data');

             console.log('response data'+ data);
               for (var i = 0; i < data.length; i++){
                   var obj = data[i];
                   for (var key in obj)
                   {
                       var attrName = key;
                       console.log('key ' +attrName);
  if(attrName=='cid'){
    $rootScope.custid=obj[key];
                 console.log('$rootScope.custid  :  '+$rootScope.custid);
                 //console.log("true case   : " +data);
                      $state.go("customerfunctions");

 //$rootScope.cust_id=response.data;
 //console.log('root'+$rootScope.cust_id);
return;

          }


           }

}}
}
         ,

         function(error)
          {
            console.error(error);
            $scope.testvalue=error.data;
           // $scope.testvalue='now';
          });

        lo.goToCustomerFunctions = function(){
            $state.go("customerfunctions");
        }
    }
});
})();
