(function(){
    
    angular.module("afterbuytwo", []);
    
    angular.module("afterbuytwo").controller("afterbuytwoCtrl", ["$state",afterbuytwoCtrl]);
    
    function afterbuytwoCtrl($state){
        var abtc  = this;
        abtc.goToPayment = function(){
            $state.go("payment");
        }
        
        abtc.goToCustomermovies = function(){
            $state.go("customermovies");
        }
        
        
    }
    
})();