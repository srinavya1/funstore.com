(function(){

    var games=angular.module("games", []);

games.controller("gamesCtrl",function($state,$http,$scope)

  {  console.log('inside console');
$scope.gotogames=function()
{

  $state.go("admingames");
}


$scope.addgames=function()
{

  console.log('inside addgames');
var config={method:'POST',
                   url:'./app/games/addgames.php',
                    data:{pid:$scope.pid,
productname: $scope.productname,
award : $scope.award ,

yearreleased: $scope.yearreleased ,
rating: $scope.rating ,
platform: $scope.platform ,
publisher: $scope.publisher ,
category: $scope.category,
developer:$scope.developer }};

console.log(JSON.stringify(config));

       var req=$http(config);





/****/
req.then(function(response)
  {
    console.log('response'+ response.data);

      //lo.goToCustomerFunctions = function()
       if(response.data==1)
        {
         // lo.goToCustomerFunctions = function()
          {
            console.log("true case   : " +response.data);
                // $state.go("customerfunctions");

//$rootscope.cust_id=response.data;
//console.log('root'+$rootscope.cust_id);

        }
      }
      else
      {
        console.log("flase case");
        //  $state.go("login");
   }


    }


  ,

  function(error)
   {
     console.error(error);
     $scope.testvalue=error.data;
    // $scope.testvalue='now';
   });





       /**/

}


        var gc = this;
        gc.goToFunctions = function(){
            $state.go("functions");
        }
    }
);
})();
