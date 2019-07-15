<?php
if(!isset($_SESSION['custid']))
{
echo 0;

}
else {
  session_start();
$_SESSION['custid']='sucess';
  echo json_encode($_SESSION);
}

 ?>
