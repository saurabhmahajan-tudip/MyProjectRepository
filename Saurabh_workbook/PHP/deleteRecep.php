<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$recepname = $objFileData->name;


$queryOut=mysql_query("Delete from receptionist WHERE recepname='$recepname'");
  
if(!empty($queryOut))
{
        echo "0";
    }
    else{
        echo "1";
	}
?>
