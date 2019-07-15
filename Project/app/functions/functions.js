(function(){
    
    angular.module("functions", []);
    
    angular.module("functions").controller("functionsCtrl",["$state",functionsCtrl]);
    
    function functionsCtrl($state){
        
        var fs = this;
        fs.goToAdminMovies = function(){
            $state.go("adminmovies");
        }
        
       fs.goToAdminGames = function(){
           $state.go("admingames");
       }
        
        fs.goToEmployee = function(){
            $state.go("employee");
        }
        
        fs.goToCustomer = function(){
            $state.go("customer");
        }
        
        fs.goToSupplier = function(){
            $state.go("supplier");
        }
        
    }
    
})();