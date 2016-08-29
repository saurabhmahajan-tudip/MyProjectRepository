<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$name = $objFileData->name;
$email = $objFileData->mail;
$pno = $objFileData->mobno;
$uname = $objFileData->uname;
$pwd = $objFileData->pwd;


$output=mysql_query("INSERT INTO receptionist(`recepname`, `recepmail`, `mobno`, `uname`, `password`) VALUES ('$name','$email', '$pno', '$uname', '$pwd')");
if(!empty($output))
{
        echo "0";
}
else{
        echo "1";
    }

?>
