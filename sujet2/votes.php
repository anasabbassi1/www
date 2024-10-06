<?php 
$e=$_POST["e"];
$q=$_POST["q"];
$r=$_POST["r"];
$cx=mysqli_connect("127.0.0.1","root","","bd12345");
$sql1="select num from eleve where num='$e'";
$res1=(mysqli_query($cx,$sql1))or die (mysqli_error($cx));
if(mysqli_num_rows($res1)<=0){
    echo"vous n'etes pas inscri";
}
else{
  
$sql2="insert into vote (`nume`, `numc`) values('$e','$q')";
$res2=(mysqli_query($cx,$sql2))or die(mysqli_error($cx));
$sql3="insert into vote (`nume`, `numc`)  values('$e','$r')";
$res3=(mysqli_query($cx,$sql3))or die(mysqli_error($cx));

if(mysqli_affected_rows($cx)>0){
    echo" reuusite ajoute";
}
}










mysqli_close($cx);
?>