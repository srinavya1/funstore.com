(function(){
    
    angular.module("gamerenttwo", []);
    
    angular.module("gamerenttwo").controller("gamerenttwoCtrl", ["$state",gamerenttwoCtrl]);
    
    function gamerenttwoCtrl($state){
        var grtc  = this;
        grtc.goToPayment = function(){
            $state.go("payment");
        }
        
        grtc.goToCustomergames = function(){
            $state.go("customergames");
        }
    }
    
})();