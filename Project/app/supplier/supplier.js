(function(){

  var supplier=  angular.module("supplier", []);

    supplier.controller("supplierCtrl",
    function ($state,$scope,$http,$rootScope){
console.log('inside cont :supl');
        var sc = this;
        sc.goToFunctions = function(){
            $state.go("functions");
        }

        listdtls =function(){
          console.log('list movie called');
          $http({
                method: 'GET',
                url: './app/supplier/getdtls.php'
             }).then(function (success){
               console.log("jason str"+JSON.stringify(success.data))
          $scope.suplierlist=success.data;
             },function (error){

             });

        }
        listdtls();
    });

})();
