(function(){
    
    angular.module("afterrentone", []);
    
    angular.module("afterrentone").controller("afterrentoneCtrl", ["$state",afterrentoneCtrl]);
    
    function afterrentoneCtrl($state){
        var aroc  = this;
        aroc.goToPayment = function(){
            $state.go("payment");
        }
        
        aroc.goToCustomermovies = function(){
            $state.go("customermovies");
        }
    }
    
})();