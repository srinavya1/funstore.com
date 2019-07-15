(function(){

  var  buy=  angular.module("buy", []);

    buy.controller("buyCtrl", function ($http,$state,$scope,$rootScope){
var cusid=$rootScope.custid;
var prid=$rootScope.buyprid;



$scope.gotocustomer =function()
{
$stae.go("customer");
}
/****function to buys******/
$scope.buy =function()
{

          console.log('inside buy');
        var config={method:'POST',
                           url:'./app/buy/buyitem.php',
                            data:{
                              pid:prid,
                              cid:cusid

         }};

        console.log(JSON.stringify(config));

               var req=$http(config);

        req.then(function(response)
          {
            console.log('response'+ response.data);
               if(response.data==1)
                {
                  {
                    console.log("true case   : " +response.data);
                    alert('Item bought successfully');
                    console.log('should print');

                }  }
              else
              {
                console.log("flase case"); }
         }
          ,

          function(error)
           {
             console.error(error);
             $scope.testvalue=error.data;
            // $scope.testvalue='now';
           });



}
//**********/////
/*****************get proddetail***************/
listoneprod = function(){
  console.log('list  one movie called');
  $http({
        method: 'POST',
        url: './app/buy/getonemovie.php',
  data:{pid:prid }
     }).then(function (success){
       console.log("jason str"+JSON.stringify(success.data));
  $scope.movielist=success.data;
    movieli=success.data;
console.log('success data printing ');
for (var i = 0; i < movieli.length; i++){
    var obj = movieli[i];
    for (var key in obj){
        var attrName = key;
        console.log('key ' +attrName);
        if(attrName=='productname'){$scope.pname=obj[key];}
        if(attrName=='id'){$scope.pid=obj[key];}
        var currentdate = new Date();
/*var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();*/
                //var dt=new Date().toISOString().slice(0, 19).replace('T', ' ');
                var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
dd='0'+dd
}

if(mm<10) {
mm='0'+mm
}

today = mm+'/'+dd+'/'+yyyy;
                var dt=today;
        $scope.dtime=dt;
        $scope.price='4$';
                //if(attrName=='award'){$scope.award='noaward';}
console.log(dt);
        var attrValue = obj[key];
        console.log('vale '+attrValue);
    }
}

  console.log('mvname'+movieli.productname);
  //$scope.productname=movielist.productname;
     },function (error){

     });

}

/***********************************************/
listoneprod();




    }

);
})();
