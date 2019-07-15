(function(){
    
    angular.module("gamerentone", []);
    
    angular.module("gamerentone").controller("gamerentoneCtrl", ["$state",gamerentoneCtrl]);
    
    function gamerentoneCtrl($state){
        var groc  = this;
        groc.goToPayment = function(){
            $state.go("payment");
        }
        
        groc.goToCustomergames = function(){
            $state.go("customergames");
        }
    }
    
})();