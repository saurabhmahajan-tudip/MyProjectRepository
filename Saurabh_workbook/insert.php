<?php


$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$name = $objFileData->visitorname;
$email = $objFileData->mail;
$pno = $objFileData->mobno;
$intime = $objFileData->intime;
$outtime = $objFileData->outtime;


$servername = "localhost";
$dbname = "saurabh_workbook";

include('dbconnection.php');

mysql_query("INSERT INTO visitor (fname, lname, email, phone_number, in_time, out_time)
VALUES ('$name','$email', '$pno', '$intime', '$outtime')");
printf("Last inserted record has id %d\n", mysql_insert_id());
mysql_close($link);

?>
