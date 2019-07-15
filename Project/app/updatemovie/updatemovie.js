(function(){

    var updmovie=angular.module("updmovie", []);

  updmovie.controller("updatemovieCtrl",function ($scope,$state,$http,$rootScope){
var  movieli=[];
console.log('selected id = '+$rootScope.updmovieid);
var mpid=$rootScope.updmovieid;
$scope.pid=mpid;
    $scope.gotomovies=function()
    {console.log('gotomovies click');
    $state.go("adminmovies");

    }

$scope.updatemovie=function()
{

  console.log('inside udatemovie ');

  console.log('$scope.category'+$scope.category);
 var config={method:'POST',
                    url:'./app/updatemovie/updmovie.php',
                     data:{pid:$scope.pid,
                         award : $scope.award ,
                         productname: $scope.productname  ,
                         yearreleased: $scope.yr ,
                         rating: $scope.rating ,
                         director: $scope.director ,
                         actor: $scope.actor ,
                         category: $scope.category }};

 console.log("data sent "+JSON.stringify(config));

        var req=$http(config);


 req.then(function(response)
   {
     console.log('response'+ response.data);

        if(response.data==1)
         {
             console.log("true case   : " +response.data);
//$state.go("adminmovies");
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
console.log('going to adminmov');
alert('value updated');
///$state.go("adminmovies");

/************/
}
listonemovie1 = function(){
  console.log('list  one movie called');
  $http({
        method: 'POST',
        url: './app/updatemovie/getonemovie.php',
  data:{pid:mpid }
     }).then(function (success){
       console.log("jason str"+JSON.stringify(success.data));
  $scope.movielist=success.data;
    movieli=success.data;
console.log('success data printing ');
for (var i = 0; i < movieli.length; i++){
    var obj = movieli[i];
    for (var key in obj){
        var attrName = key;
        console.log('key ' +attrName);
        if(attrName=='productname'){$scope.productname=obj[key];}
        if(attrName=='actor'){$scope.actor=obj[key];}
          if(attrName=='yr'){$scope.yr=obj[key];}
            if(attrName=='director'){$scope.director=obj[key];}
              if(attrName=='rating'){$scope.rating=obj[key];}
                if(attrName=='category'){$scope.category=obj[key];}
                  if(attrName=='award'){$scope.award=obj[key];}
                //if(attrName=='award'){$scope.award='noaward';}

        var attrValue = obj[key];
        console.log('vale '+attrValue);
    }
}

  console.log('mvname'+movieli.productname);
  //$scope.productname=movielist.productname;
     },function (error){

     });

}
listonemovie1();
  }
);
})()
