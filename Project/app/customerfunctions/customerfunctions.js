(function(){
    
    angular.module("customerfunctions", []);
    
    angular.module("customerfunctions").controller("customerfunctionsCtrl",["$state",customerfunctionsCtrl]);
    
    function customerfunctionsCtrl($state){
        
        var cuf = this;
        cuf.goToCustomerMovies = function(){
            $state.go("customermovies");
        }
        
         cuf.goToCustomerGames = function(){
            $state.go("customergames");
        }
        
    }
    
})();