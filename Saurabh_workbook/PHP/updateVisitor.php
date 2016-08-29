<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$name = $objFileData->name;
$email = $objFileData->mail;
$pno = $objFileData->mobno;
$intime = $objFileData->intime;
$outtime = $objFileData->outtime;
$id=$objFileData->id;

$queryOut=mysql_query("Update visitor SET vname='$name',vmail='$email' ,cno='$pno' , intime='$intime' ,outtime='$outtime' WHERE id='$id' AND vname='$name' ");
  
if(!empty($queryOut))
{
        echo "0";
    }
    else{
        echo "1";
	}
?>