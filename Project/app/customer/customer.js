(function(){


    var customer=angular.module("customer", []);

    customer.controller("customerCtrl",

   function ($state,$scope,$http,$rootScope){

     console.log('inside cont :cust');
        var cc = this;
        cc.goToFunctions = function(){
            $state.go("functions");
        }


        listdtls =function(){
          console.log('list movie called');
          $http({
                method: 'GET',
                url: './app/customer/getdtls.php'
             }).then(function (success){
               console.log("jason str"+JSON.stringify(success.data))
          $scope.customerlist=success.data;
             },function (error){

             });

        }
        listdtls();
    });

})();
