<?php
include "$_SERVER[DOCUMENT_ROOT]/projectn/dbconnect.php";
$data=json_decode(file_get_contents("php://input"));
//$pid=13;
$pid=$data->pid;
$selquery="Select p.id, p.productname from  product p where  p.id=$pid limit 1; ";
//$selquery="SELECT p.id as 'id',trim(P.productname) as 'pro', MA.actor as 'Actor' FROM product P, movieactor MA WHERE P.pro_type='Movie'AND P.id=MA.mid and P.id=$pid" ;
//$selquery="select * from product";
	$reslt=mysqli_query($conn,$selquery);

	$i=0;
	$bigcart=array();
  $movie=array();
while($extract =mysqli_fetch_array($reslt,MYSQLI_ASSOC))
{
	$movie[$i]=$extract;
  //  $movie['actor']=$extract['actor'];

//	echo $extract['count'];
$i++;


}
//if($bigcart!=null)
echo json_encode( $movie);


 ?>
