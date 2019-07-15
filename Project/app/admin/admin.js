(function(){

    var admin=angular.module("admin",[]);

  admin.controller("adminCtrl", function($rootScope,$scope,$http,$state)
  {
/**********************/

if($rootScope.custid!=null&&$rootScope.isadmin==true)
{
  console.log('user id : '+$rootScope.custid);
$state.go("functions");

}
console.log('inside admin');
  /*********login fcn**********/
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
             {console.log("flase case"+success.data+"data");
             alert('invalid admin password try again' );
               $state.go("admin");
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
    if(obj[key]==999){
  $rootScope.custid=obj[key];
  $rootScope.isadmin=true;
               console.log('$rootScope.custid  :  '+$rootScope.custid);
               //console.log("true case   : " +data);
                    $state.go("functions");

  //$rootScope.cust_id=response.data;
  //console.log('root'+$rootScope.cust_id);
  return;

}
else {
  alert('invalid admin cred');
  $state.go('admin');
}
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


  /*******************/

}

);

})();
