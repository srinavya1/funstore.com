<?php
include "$_SERVER[DOCUMENT_ROOT]/projectn/dbconnect.php";


$selquery="SELECT * from customer" ;
//$selquery="select * from product";
	$reslt=mysqli_query($conn,$selquery);

	$i=0;
	$bigcart=array();
  $customer=array();
while($extract =mysqli_fetch_array($reslt,MYSQLI_ASSOC))
{
	$customer[$i]=$extract;
  //  $movie['actor']=$extract['actor'];

//	echo $extract['count'];
$i++;


}
//if($bigcart!=null)
echo json_encode( $customer);


 ?>
