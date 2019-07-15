<?php
include "$_SERVER[DOCUMENT_ROOT]/projectn/dbconnect.php";
$data=json_decode(file_get_contents("php://input"));
//$data=json_decode(file_get_contents("php=//input"));
/**************sample?*/
$pid=1111;

$pid=$data->pid;


////////////////////////////////////////
//$pid=59;
/*$productname= 'last';
$award = 'last' ;
$productname= 'pp'  ;
$year= 2012;
$rating= 1.1 ;
$platform= 'ps2';
$publisher= 'inox' ;
$category= 'adventure' ;
$actor='jhonf';*/

//$sql = "insert into users(firstname,lastname,emailid,type,address,shippingaddress,gender,dob,username,password) values('$firstname','$lastname','$emailid','$phoneno','$address','$shippingaddress','$gender','$dob','$uname','$pass');";

$sql1="delete from product  where id= $pid ;";
//$sql1="INSERT INTO product (id, productname, award, yr, rating) VALUES ( 33, 'pp','44',2012,1.1);";


$succ=0;
////window.location.href='admin/ahm/panel';
try{

if ($conn->query($sql1) === TRUE) {
$succ=1;
  }

  //  header('location=login.php');}
   else {
     echo'1failed';
     echo $conn->error;
     //window.location.href='admin/ahm/panel';


   //echo "Error= " . $sql . "<br>" . $conn->error;
}
}
catch(Exception $e)
{
echo('message'.$e->getMessage());

}

echo json_encode($succ);
?>
