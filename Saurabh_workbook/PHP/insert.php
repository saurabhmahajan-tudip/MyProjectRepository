<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$name = $objFileData->name;
$email = $objFileData->mail;
$pno = $objFileData->mobno;
$intime = $objFileData->intime;
$uid=$objFileData->id;


$output=mysql_query("INSERT INTO visitor (`vname`, `vmail`, `cno`, `intime`, `outtime`, `ID`) VALUES ('$name','$email', '$pno', '$intime', '','$uid')");
if(!empty($output))
{
        echo "0";
}
else{
        echo "1";
    }

?>
