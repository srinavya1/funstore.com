(function(){
    
    angular.module("afterbuyone", []);
    
    angular.module("afterbuyone").controller("afterbuyoneCtrl", ["$state",afterbuyoneCtrl]);
    
    function afterbuyoneCtrl($state){
        var aboc = this;
        aboc.goToPayment = function(){
            $state.go("payment");
        }
        
        aboc.goToCustomermovies = function(){
            $state.go("customermovies");
        }
        
        
    }
    
})();