<?php
include "$_SERVER[DOCUMENT_ROOT]/projectn/dbconnect.php";
$data=json_decode(file_get_contents("php://input"));
//$data=json_decode(file_get_contents("php=//input"));
/**************sample?*/
$pid=444;


$award = 'last' ;
$productname= 'pptest'  ;
$year= 2012;
$developer='ad';
$rating= 1.1 ;
$platform= 'ps2';
$publisher= 'inox' ;
$category= 'adventure' ;
//$actor='jhonf';


$pid=$data->pid;

$productname= $data->productname;
$award = $data->award ;
$year= $data->yearreleased ;
$rating= $data->rating ;


$category= $data->category ;

$publisher=$data->publisher;

$platform=$data->platform;
$developer=$data->developer;




//$year= 2012;
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

//***delete modulr*****************/

$sql1="delete from product  where id= $pid ;";
//$sql1="INSERT INTO product (id, productname, award, yr, rating) VALUES ( 33, 'pp','44',2012,1.1);";


$succd=0;
////window.location.href='admin/ahm/panel';
try{

if ($conn->query($sql1) === TRUE) {
$succd=1;
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

///////*   end od del****/



//$sql = "insert into users(firstname,lastname,emailid,type,address,shippingaddress,gender,dob,username,password) values('$firstname','$lastname','$emailid','$phoneno','$address','$shippingaddress','$gender','$dob','$uname','$pass');";

$sql1="INSERT INTO product (id, productname, award, yr, rating,pro_type) VALUES ($pid, '$productname','$award',$year,'$rating' ,'vg');";
$sql2="INSERT INTO videogame (vid, platform, publisher, developer) VALUES ($pid, '$platform', '$publisher', '$developer' );";
  $sql3=  "INSERT INTO productcategory (p_id, category ) VALUES ($pid, '$category' );";
$succ=0;
////window.location.href='admin/ahm/panel';
try{

if ($conn->query($sql1) === TRUE) {
  if ($conn->query($sql2) === TRUE) {
    if ($conn->query($sql3) === TRUE) {




                                    $succ=1;

      }else{  echo'3failed';  echo $conn->error;  }
    }else{  echo'2failed';  echo $conn->error;  }
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
