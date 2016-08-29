<?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$user = $objFileData->id;
if($user=="Admin"){
	$queryOut=mysql_query("SELECT * from visitor");
}
else{
	$queryOut=mysql_query("SELECT * from visitor WHERE ID='$user'");
}

while ($output = mysql_fetch_array($queryOut)){
	$out[]=$output;
}
echo json_encode($out);
?>
