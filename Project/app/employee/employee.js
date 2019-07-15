(function(){

    var employee= angular.module("employee", []);

    employee.controller("employeeCtrl",function ($state,$scope,$http,$rootScope){
        var ec = this;
        console.log('inside cont :emp');
        ec.goToFunctions = function(){
            $state.go("functions");
        }

$rootScope.gotoadminfcn=function()
{
  console.log('going to func via rootscope');
$state.go("functions");

}

        listdtls =function(){
          console.log('list movie called');
          $http({
                method: 'GET',
                url: './app/employee/getdtls.php'
             }).then(function (success){
               console.log("jason str"+JSON.stringify(success.data))
          $scope.emplist=success.data;
             },function (error){

             });

        }
        listdtls();

    });

})();
