<?php
include "../dbconnect.php";
$selquery="select gamename,id,image_name,description,price from product_images;";
$imgs=array();
$reslt=mysqli_query($conn,$selquery);;
if(mysqli_num_rows($reslt))
{
while($extract =mysqli_fetch_array($reslt,MYSQLI_ASSOC))
{
$imgs=$extract;

}
}
   echo json_encode($imgs);
 ?>
