(function(){
    
    angular.module("gamebuytwo", []);
    
    angular.module("gamebuytwo").controller("gamebuytwoCtrl", ["$state",gamebuytwoCtrl]);
    
    function gamebuytwoCtrl($state){
        var gbtc  = this;
        gbtc.goToPayment = function(){
            $state.go("payment");
        }
        
        gbtc.goToCustomergames = function(){
            $state.go("customergames");
        }
        
        
    }
    
})();