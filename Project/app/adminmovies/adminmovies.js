(function(){

    var adminmovies=angular.module("adminmovies", []);

adminmovies.controller("adminmoviesCtrl", function ($rootScope,$state,$scope,$http){
console.log('inside admin movies');

listmovie =function(){
  console.log('list movie called');
  $http({
        method: 'GET',
        url: './app/adminmovies/getmovies.php'
     }).then(function (success){
       console.log("jason str"+JSON.stringify(success.data))
  $scope.movielist=success.data;
     },function (error){

     });

}
listmovie();
        var amc = this;
        amc.goToMovies = function(){
            $state.go("movies");
        }

$scope.gotoupdate=function(mid)
{$rootScope.updmovieid=mid;
console.log('Ssclicked $rootScope.updmovieid ='+$rootScope.updmovieid );
  $state.go("updatemovie");

}
$scope.gotoadminmain=function()
{
$state.go("functions");

}
$scope.deletemovie=function(movid)
{
/*************/



  console.log('inside delgames');
var config={method:'POST',
                   url:'./app/adminmovies/deleteprod.php',
                    data:{pid:movid }};

console.log(JSON.stringify(config));

       var req=$http(config);


req.then(function(response)
  {
    console.log('response'+ response.data);

       if(response.data==1)
        {
            console.log("true case   : " +response.data);
listmovie();
      }
      else
      {
        console.log("flase case");

       } }
  ,

  function(error)
   {
     console.error(error);
     $scope.testvalue=error.data;

   });
listmovie();

}


    });

})();
