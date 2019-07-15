



(function(){
      var customergames=angular.module('customergames',[]);
  //  angular.module("login", []);

    //angular.module("login").controller("loginCtrl", ["$state",loginCtrl]);
      customergames.controller('customergamesCtrl',function($rootScope,$scope,$http,$state)
{
console.log('inside');
/**************gotobuy******/
$scope.gotobuy = function(pid)
{
$state.go("buy");
$rootScope.buyprid=pid;

}
/*************************/
$scope.gotorent=function(pid)
{console.log('going to rest using rootcope');
$state.go("rent");
$rootScope.rentprid=pid;
}
$scope.gamelist=[];
$http({
      method: 'GET',
      url: './app/customergames/getgames.php'
   }).then(function (success){
     console.log("jason str"+JSON.stringify(success.data))
$scope.gamelist=success.data;
   },function (error){

   });
   $scope.startsearch =function(){
   console.log('game search initiated');
   console.log('serch qry'+$scope.searchval);

   var config={method:'POST',
                           url:'./app/customergames/getonegame.php',
                            data:{
                              pdata:$scope.searchval
         }};

        console.log(JSON.stringify(config));

               var req=$http(config);
   req.then(function (success){
        console.log("jason str"+JSON.stringify(success.data));
   $scope.gamelist=success.data;
   //  movieli=success.data;

   //console.log('mvname'+movieli.productname);
   //$scope.productname=movielist.productname;
      },function (error){

      });

   }

      var cmc = this;
      cmc.goToAfterbuyone = function(){
          $state.go("afterbuyone");
      }

      cmc.goToAfterbuytwo = function(){
          $state.go("afterbuytwo");
      }

      cmc.goToAfterrentone = function(){
          $state.go("afterrentone");
      }

      cmc.goToAfterrenttwo = function(){
          $state.go("afterrenttwo");
      }

      cmc.goToCustomerfunctions = function(){
          $state.go("customerfunctions");
      }


    });
})
();
