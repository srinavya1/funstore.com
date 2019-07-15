<?php
$data=json_decode(file_get_contents("php://input"));
include "$_SERVER[DOCUMENT_ROOT]/projectn/dbconnect.php";
$username='aa';
$username=$data->username;
$password=$data->password;
//$username='ppgeth';
//$password='ppp';
$succ=0;
$selquery="select cid  from customer where trim(name)='$username' and trim(password)='$password'";
  $reslt=mysqli_query($conn,$selquery);
  $cstid=array() ;
  $flag=0;
  while($extract =mysqli_fetch_array($reslt,MYSQLI_ASSOC))
  {
  	$cstid[0]=$extract;
    //echo$extract['name'];
    //echo $extract['cid'];
    //  $movie['actor']=$extract['actor'];

  //	echo $extract['count'];
//$succ[i]=$cstid['cid'];
$flag=1;

  }
  if($flag==1){
echo json_encode($cstid);}
else{

  echo json_encode(0);
}
/*
$res=array('val'=>true);
//$password==$data->password;
if($username=='pradeep')
{
echo json_encode(101);
}
else {
  $res=array('val'=>false);
  echo json_encode(0);
}*/
?>
