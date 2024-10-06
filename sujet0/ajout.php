<?php 
$c=$_POST["c"];
$d=$_POST["d"];
$r=$_POST["r"];
$p=$_POST["p"];
$cx=mysqli_connect("127.0.0.1","root","","sujte0");
$sql1="INSERT INTO habit(`description`,`taille`,`disponible`,`codecat`) VALUES('$d','$r','D','$c')";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"enregistrement realise avec succes";

}


mysqli_close($cx);
?>