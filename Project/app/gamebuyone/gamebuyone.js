(function(){
    
    angular.module("gamebuyone", []);
    
    angular.module("gamebuyone").controller("gamebuyoneCtrl", ["$state",gamebuyoneCtrl]);
    
    function gamebuyoneCtrl($state){
        var gboc = this;
        gboc.goToPayment = function(){
            $state.go("payment");
        }
        
        gboc.goToCustomergames = function(){
            $state.go("customergames");
        }
        
        
    }
    
})();