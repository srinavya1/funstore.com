  var admmoviedir=angular.module("admmoviedir", []);
  admmoviedir.directive('admmovie',function()
  {
    return{
restrict:'E',
scope:{
  movie:'='
},
templateUrl:"app/directives/admmovies.tpl.html",
controller:function($scope,$rootScope,$state)
{
console.log('controller dir');
console.log($scope.movie);
$scope.gotoupdate=function(mid)
{$rootScope.updmovieid=mid;
console.log('Ssclicked $rootScope.updmovieid ='+$rootScope.updmovieid );
  $state.go("updatemovie");

}
}


    }
  }
);
