<?php
include "$_SERVER[DOCUMENT_ROOT]/projectn/dbconnect.php";


$selquery="SELECT P.id,P.productname as 'Name' , pc.category as 'Genre'
FROM product P, videogame VG , productcategory pc
WHERE P.pro_type='VG'AND P.id=VG.vid and p.id=pc.p_id
order by P.id desc " ;
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
