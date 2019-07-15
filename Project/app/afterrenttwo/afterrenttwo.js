(function(){
    
    angular.module("afterrenttwo", []);
    
    angular.module("afterrenttwo").controller("afterrenttwoCtrl", ["$state",afterrenttwoCtrl]);
    
    function afterrenttwoCtrl($state){
        var artc  = this;
        artc.goToPayment = function(){
            $state.go("payment");
        }
        
        artc.goToCustomermovies = function(){
            $state.go("customermovies");
        }
        
        
    }
    
})();