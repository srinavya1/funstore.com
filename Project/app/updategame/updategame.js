(function(){

    var updgame=angular.module("updgame", []);

  updgame.controller("updategameCtrl",function ($scope,$state,$http,$rootScope){


    $scope.gotogame=function()
    {console.log('gotomovies click');
    $state.go("admingames");

    }

/*******fetching global update game id ************/
var gpid=$rootScope.updgameid;
/**************************************************
/*****************updating game****************/

$scope.updategame=function()
{

  console.log('inside udategame ');

  console.log('$scope.category'+$scope.category);
 var config={method:'POST',
                    url:'./app/updategame/updgame.php',
                     data:{pid:$scope.pid,
                         award : $scope.award ,
                         productname: $scope.productname  ,
                         yearreleased: $scope.yr ,
                         rating: $scope.rating ,
                         platform: $scope.platform ,
                         publisher: $scope.publisher ,
                         developer:$scope.developer,
                         category: $scope.category }};

 console.log("data sent "+JSON.stringify(config));

        var req=$http(config);


 req.then(function(response)
   {
     console.log('response'+ response.data);

        if(response.data==1)
         {
             console.log("true case   : " +response.data);
             alert('update successfull');
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

/*********************************************/

/*******listing one  games**/
listonegame = function(){
  console.log('list  one game called with id'+ gpid);
  $http({
        method: 'POST',
        url: './app/updategame/getonegame.php',
  data:{pid:gpid }
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
        if(attrName=='publisher'){$scope.publisher=obj[key];}
          if(attrName=='yr'){$scope.yr=obj[key];}
            if(attrName=='platform'){$scope.platform=obj[key];}
              if(attrName=='rating'){$scope.rating=obj[key];}
                if(attrName=='category'){$scope.category=obj[key];}
                  if(attrName=='award'){$scope.award=obj[key];}
                    if(attrName=='developer'){$scope.developer=obj[key];}
                      if(attrName=='publisher'){$scope.publisher=obj[key];}
                      $scope.pid=gpid;
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
listonegame();






  }
);
})()
