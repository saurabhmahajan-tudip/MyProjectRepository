<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$srno = $objFileData->srno;
$recepname = $objFileData->name;
$email = $objFileData->mail;
$cno = $objFileData->mobno;	
$uname = $objFileData->uname;
$pwd = $objFileData->pwd;

$queryOut=mysql_query("Update receptionist SET recepmail='$email' ,mobno='$cno' , uname='$uname' ,password='$pwd' WHERE srno='$srno' AND recepname='$recepname'");
  
if(!empty($queryOut))
{
        echo "0";
    }
    else{
        echo "1";
	}
?>
