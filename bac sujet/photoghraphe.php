<?php 
$n=$_POST["n"];
$p=$_POST["p"];
$t=$_POST["t"];
$e=$_POST["e"];
$a=$_POST["a"];
$r=$_POST["r"];
$d=$_POST["d"];
$m=$_POST["m"];



$cx=mysqli_connect("127.0.0.1","root","","bdphotographie");
$sql1="select * from photographie where mailp='$e'";
$res1=mysqli_query($cx,$sql1) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)!=0){
    echo"photographe deja inscrit";
}
else{
$dd=date("Y-m-d H:i:s");
$sql2="INSERT INTO  photographie(`nomp`, `prenomp`, `adrp`, `telp`, `mailp`, `sexep`, `datenp`, `pwdp`)
 VALUES ('$n','$p','$t','$e','$a','$r','$d','$m')";
$res2=mysqli_query($cx,$sql2) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"inscription photographe $n $p avec succes";
}


}



mysqli_close($cx);

?>