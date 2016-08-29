 <?php

include('dbconnection.php');
$fileData = file_get_contents("php://input");
$objFileData = json_decode($fileData);

$name = $objFileData->uname;
$pwd= $objFileData->pwd;

$comments=mysql_query("SELECT * from receptionist where uname='$name' and password='$pwd'");
$row = mysql_fetch_array($comments) or die(mysql_error());
  
if(!empty($row['uname']) AND !empty($row['password']))
{
        echo "0";
    }
    else{
        echo "1";
	}
?>
