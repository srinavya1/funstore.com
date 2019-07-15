(function(){

    admingames=angular.module("admingames", []);

  admingames.controller("admingamesCtrl",

    function ($state,$http,$scope,$rootScope){
        var agc = this;
        agc.goToGames = function(){
            $state.go("games")
        }


        $scope.gotoadminmain=function()
        {
        $state.go("functions");

        }

        listgames =function(){
          console.log('list movie called');
          $http({
                method: 'GET',
                url: './app/admingames/getgames.php'
             }).then(function (success){
               console.log("jason str"+JSON.stringify(success.data))
          $scope.gamelist=success.data;
             },function (error){

             });

        }
        listgames();

        $scope.gotoupdate=function(gid)
        {
console.log('inside gotoupdate');
          $rootScope.updgameid=gid;
        console.log('Ssclicked $rootScope.updgameid ='+$rootScope.updgameid );
          $state.go("updategame");

        }

        $scope.deletegame=function(gameid)
        {
        /*************/



          console.log('inside delgames');
        var config={method:'POST',
                           url:'./app/admingames/deleteprod.php',
                            data:{pid:gameid }};

        console.log(JSON.stringify(config));

               var req=$http(config);


        req.then(function(response)
          {
            console.log('response'+ response.data);

               if(response.data==1)
                {
                    console.log("true case   : " +response.data);
        listgames();
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
        listgames();

        }






    });

})();
