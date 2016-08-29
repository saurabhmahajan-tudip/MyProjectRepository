<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$vname = $objFileData->vname;


$queryOut=mysql_query("Delete from visitor WHERE vname='$vname'");
  
if(!empty($queryOut))
{
        echo "0";
    }
    else{
        echo "1";
	}
?>
