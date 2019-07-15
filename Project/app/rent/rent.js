(function(){

  var rent=  angular.module("rent", []);

  rent.controller("rentCtrl",function ($http,$rootScope,$scope,$state){
console.log('inside rent controller');
var cusid=$rootScope.custid;
var prid=$rootScope.rentprid;
$scope.duration=1;
$scope.price=((4*$scope.duration));
$scope.setprice =function(){
console.log('set price called');
  $scope.price=((4*$scope.duration));}
console.log('inside rent controller');
    /****function to rent******/
    $scope.rent =function()
    {

              console.log('inside rent');
            var config={method:'POST',
                               url:'./app/rent/rentitem.php',
                                data:{
                                  pid:prid,
                                  cid:cusid,
                                  duration:$scope.duration

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
                        alert('Item rented successfully');
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
            url: './app/rent/getonemovie.php',
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






  });

})();
