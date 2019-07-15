(function(){
    
    angular.module("payment", []);
    
    angular.module("payment").controller("paymentCtrl", ["$state",paymentCtrl]);
    
    function paymentCtrl($state){
        var payc = this;
        payc.goToCustomerfunctions = function(){
            $state.go("customerfunctions");
        }
        
        payc.makeAlert = function(){
            alert("Purchase Successful");
        }
        
    }
    
})();