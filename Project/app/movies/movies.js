(function(){

    var movies=angular.module("movies", []);

  movies.controller("moviesCtrl",function ($scope,$state,$http){

console.log(' MOVIES cont');

$scope.gotomovies=function()
{console.log('gotomovies click');
$state.go("functions");

}


      $scope.addmovies=function()
      {

        console.log('inside addmovies');
      var config={method:'POST',
                         url:'./app/movies/addmovies.php',
                          data:{
                            pid:$scope.pid,
      productname: $scope.productname,
      award : $scope.award ,
      yearreleased: $scope.yearreleased ,
      rating: $scope.rating ,
      director: $scope.director ,
      actor: $scope.actor ,
      category: $scope.category
       }};

      console.log(JSON.stringify(config));

             var req=$http(config);

      req.then(function(response)
        {
          console.log('response'+ response.data);
             if(response.data==1)
              {
                {
                  console.log("true case   : " +response.data);

              }  }
            else
            {
              console.log("flase case"); }
       }
        ,

        function(error)
         {
           console.error(error);
           $scope.testvalue=error.data;
          // $scope.testvalue='now';
         });


      }

    }

);
})
();
