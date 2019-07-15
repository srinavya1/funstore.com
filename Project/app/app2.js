(function(){

    angular.module("project", ["admmoviedir","signup","header","login", "ui.router", "buy", "rent", "functions", "movies", "games", "employee", "customer", "supplier", "admin", "customerfunctions", "customermovies", "adminmovies", "customergames", "admingames", "afterbuyone", "afterbuytwo", "payment", "afterrentone", "afterrenttwo", "gamebuyone", "gamebuytwo", "gamerentone", "gamerenttwo","updgame","updmovie"]);

    angular.module("project").controller("mainCtrl", [mainCtrl]);

    angular.module("project").config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider){

        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as lc",
            url : '/'
        };

        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl as hc"
        };

        var buyObj = {
            templateUrl: "app/buy/buy.tpl.html",
            controller: "buyCtrl as bc"
        };

        var rentObj = {
            templateUrl: "app/rent/rent.tpl.html",
            controller: "rentCtrl as rc"
        };

        var functionsObj = {
            templateUrl: "app/functions/functions.tpl.html",
            controller: "functionsCtrl as fc"
        };

        var moviesObj = {
            templateUrl: "app/movies/movies.tpl.html",
            controller: "moviesCtrl as mc"
        };

        var gamesObj = {
            templateUrl: "app/games/games.tpl.html",
            controller: "gamesCtrl as gc"
        };

        var employeeObj = {
            templateUrl: "app/employee/employee.tpl.html",
            controller: "employeeCtrl as ec"
        };

        var customerObj = {
            templateUrl: "app/customer/customer.tpl.html",
            controller: "customerCtrl as cc"
        };

        var supplierObj =  {
            templateUrl: "app/supplier/supplier.tpl.html",
            controller:  "supplierCtrl as sc"
        };

        var adminObj = {
            templateUrl: "app/admin/admin.tpl.html",
            controller: "adminCtrl as ac"
        };

        var customerfunctionsObj = {
            templateUrl: "app/customerfunctions/customerfunctions.tpl.html",
            controller: "customerfunctionsCtrl as cuf"
        };

        var customermoviesObj = {
            templateUrl: "app/customermovies/customermovies.tpl.html",
            controller: "customermoviesCtrl as cmc"

        };

        var adminmoviesObj = {
            templateUrl: "app/adminmovies/adminmovies.tpl.html",
            controller: "adminmoviesCtrl as amc"
        };

        var customergamesObj = {
            templateUrl: "app/customergames/customergames.tpl.html",
            controller: "customergamesCtrl as cgc"
        };

        var admingamesObj = {
            templateUrl: "app/admingames/admingames.tpl.html",
            controller: "admingamesCtrl as agc"
        };

        var afterbuyoneObj = {
            templateUrl: "app/afterbuyone/afterbuyone.tpl.html",
            controller: "afterbuyoneCtrl as aboc"
        };

        var signupObj = {
            templateUrl: "app/signup/signup.tpl.html",
            controller: "signupCtrl as suc"
        };

        var afterbuytwoObj = {
            templateUrl: "app/afterbuytwo/afterbuytwo.tpl.html",
            controller: "afterbuytwoCtrl as abtc"
        };

        var paymentObj = {
            templateUrl: "app/payment/payment.tpl.html",
            controller: "paymentCtrl as payc"
        };

        var afterrentoneObj = {
            templateUrl: "app/afterrentone/afterrentone.tpl.html",
            controller: "afterrentoneCtrl as aroc"
        };

        var afterrenttwoObj = {
            templateUrl: "app/afterrenttwo/afterrenttwo.tpl.html",
            controller: "afterrenttwoCtrl as artc"
        };

        var gamebuyoneObj = {
            templateUrl: "app/gamebuyone/gamebuyone.tpl.html",
            controller: "gamebuyoneCtrl as gboc"
        };

        var gamebuytwoObj = {
            templateUrl: "app/gamebuytwo/gamebuytwo.tpl.html",
            controller: "gamebuytwoCtrl as gbtc"
        };

        var gamerentoneObj = {
            templateUrl: "app/gamerentone/gamerentone.tpl.html",
            controller: "gamerentoneCtrl as groc"
        };

        var gamerenttwoObj = {
            templateUrl: "app/gamerenttwo/gamerenttwo.tpl.html",
            controller: "gamerenttwoCtrl as grtc"
        };


        var updategameobj = {
            templateUrl: "app/updategame/updategame.tpl.html",
            controller: "updategameCtrl as updgmc"
        };
        var updatemovieobj = {
            templateUrl: "app/updatemovie/updatemovie.tpl.html",
            controller: "updatemovieCtrl as updmvc"
        };
  $stateProvider.state("updatemovie", updatemovieobj);
    $stateProvider.state("updategame", updategameobj);

        $stateProvider.state("login", loginObj);
        $stateProvider.state("home", homeObj);
        $stateProvider.state("buy", buyObj);
        $stateProvider.state("rent", rentObj);
        $stateProvider.state("functions", functionsObj);
        $stateProvider.state("movies", moviesObj);
        $stateProvider.state("games", gamesObj);
        $stateProvider.state("employee", employeeObj);
        $stateProvider.state("customer", customerObj);
        $stateProvider.state("supplier", supplierObj);
        $stateProvider.state("admin", adminObj);
        $stateProvider.state("customerfunctions", customerfunctionsObj);
        $stateProvider.state("customermovies", customermoviesObj);
        $stateProvider.state("adminmovies", adminmoviesObj);
        $stateProvider.state("customergames", customergamesObj);
        $stateProvider.state("admingames", admingamesObj);
        $stateProvider.state("afterbuyone", afterbuyoneObj);
        $stateProvider.state("signup", signupObj);
        $stateProvider.state("afterbuytwo", afterbuytwoObj);
        $stateProvider.state("payment", paymentObj);
        $stateProvider.state("afterrentone", afterrentoneObj);
        $stateProvider.state("afterrenttwo",afterrenttwoObj);
        $stateProvider.state("gamebuyone", gamebuyoneObj);
        $stateProvider.state("gamebuytwo", gamebuytwoObj);
        $stateProvider.state("gamerentone", gamerentoneObj);
        $stateProvider.state("gamerenttwo", gamerenttwoObj);

        $urlRouterProvider.otherwise('/');

    }]);

    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
    }

})();
