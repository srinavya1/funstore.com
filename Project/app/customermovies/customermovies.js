
(function(){
    var customermovies=angular.module('customermovies',[]);
  //  angular.module("login", []);

    //angular.module("login").controller("loginCtrl", ["$state",loginCtrl]);
    customermovies.controller('customermoviesCtrl',function($rootScope,$scope,$http,$state)
{
  /**************gotobuy******/
  $scope.gotobuy=function(pid)
  {
  $state.go("buy");
  $rootScope.buyprid=pid;
  }
  /*************************/
  /*****************gotorent************/
  $scope.gotorent=function(pid)
  {console.log('going to rest using rootcope');
  $state.go("rent");
  $rootScope.rentprid=pid;
  }
  /*************************************/

//**********************go to cust functions***************/
$rootScope.gotocustomerfunctions =function()
{
console.log('gotocustomerfunctions');
  $state.go("customerfunctions");
}


console.log('inside');

  $scope.movies=[{name:'bahuabali',src:'one.jpeg'},
                                 {name:'bahuabali',src:'one.jpeg'},
                                 {name:'bahuabali3',src:'one.jpeg'}];


$scope.movielist=[];
$http({
      method: 'GET',
      url: './app/customermovies/getmovies.php'
   }).then(function (success){
     console.log("jason str"+JSON.stringify(success.data))
$scope.movielist=success.data;
   },function (error){

   });

$scope.startsearch =function(){
console.log('search initiated');
console.log('serch qry'+$scope.searchval);

var config={method:'POST',
                        url:'./app/customermovies/getonemovie.php',
                         data:{
                           pdata:$scope.searchval
      }};

     console.log(JSON.stringify(config));

            var req=$http(config);
req.then(function (success){
     console.log("jason str"+JSON.stringify(success.data));
$scope.movielist=success.data;
//  movieli=success.data;

//console.log('mvname'+movieli.productname);
//$scope.productname=movielist.productname;
   },function (error){

   });

}


/*************new************/



/****************************/





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
