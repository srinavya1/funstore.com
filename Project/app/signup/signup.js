(function(){

  var signup  =angular.module("signup", []);

    signup.controller("signupCtrl",

    function ($scope,$http,$rootScope,$state){
        console.log('inside sigup ');
      $scope.gotologin=function()  {console.log('goto login clicked;')
        $state.go("login");
      }
      /*******************create user**************/
      $scope.createuser =function()
      {
if($scope.password!=$scope.password2){alert('passwords dont match');
 return;}
        console.log('inside create user');
      var config={method:'POST',
                         url:'./app/signup/adduser.php',
                          data:{

                            username:$scope.username,
                            password:$scope.password,
                            address:$scope.address

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
                  alert('user added successfully login to continue');
                  $state.go("login");

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
      /**********************************/////////
    });

})();
