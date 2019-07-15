<?php
include "$_SERVER[DOCUMENT_ROOT]/projectn/dbconnect.php";
$data=json_decode(file_get_contents("php://input"));
//$data=json_decode(file_get_contents("php=//input"));
/**************sample?*/
$pid=0;
$productname='';
$productname= 'last';
$award = 'last' ;
$productname= 'pp'  ;
$year= 2012;
$developer='';
$rating= 1.1 ;
$platform= 'ps2';
$publisher= 'inox' ;
$category= 'adventure' ;
$actor='jhonf';


//$pid=$data->pid;
/*
$date_time="1999-12-31 23:51:59";
$cid=101;
$pid=24;
$price=4;
*/
$cid=$data->cid;
$pid=$data->pid;
//$price=$data->price;
//$date_time=$data->date_time;

$sql1="INSERT INTO buy (cid, pid, price, date_time) VALUES ( $cid, $pid, 4,now() );";





$succ=0;
////window.location.href='admin/ahm/panel';
try{

if ($conn->query($sql1) === TRUE) {

                                    $succ=1;
                                      }

    else{ echo'1failed';
     echo $conn->error;}

}

catch(Exception $e)
{
echo('message'.$e->getMessage());

}

echo json_encode($succ);
?>
