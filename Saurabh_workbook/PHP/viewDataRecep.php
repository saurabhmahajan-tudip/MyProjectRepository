<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$queryOut=mysql_query("SELECT * from receptionist");
while ($output = mysql_fetch_array($queryOut)) {
	$out[]=$output;
}
echo json_encode($out);
?>
