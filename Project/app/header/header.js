(function(){

  var header=  angular.module("header", []);

  header.controller("headerCtrl",  function ($state,$scope,$rootScope,$http){


        var hc = this;
        hc.navItems = [

            {
                "key": "admin",
                "value": "Admin Login"
            }

        ];
        hc.goToLogin = function(){
          console.log('goto Login');

            $state.go("login");
        }
        $rootScope.gotoadmin=function(){
          console.log('goto admin');
$state.go("admin");

        }
        $rootScope.logout=function()
        {
          console.log('log out clicked');
          $rootScope.custid=null;
          $rootScope.isadmin=false;
$state.go("login");

        }


    });

})();
