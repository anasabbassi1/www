<?php
$n=$_POST["n"];
$p=$_POST["p"];
$t=$_POST["t"];
$e=$_POST["e"];

$a=$_POST["a"];

$m=$_POST["m"];
$cx=mysqli_connect("127.0.0.1","root","","bdphotographie");
$s=strpos($p ," ");
$nom=substr($p,0,$s);
$pre=substr($p,$s+1);
$sql1="select * from photographie where nomp='$nom' and prenomp='$pre' ";
$res1=mysqli_query($cx,$sql1) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)==0){
    echo" nom ou prenom photo graphe  errone";
}
else{
    $idp=mysqli_fetch_array($res1);
$sql2="INSERT INTO loboratoire(`noml`, `adrl`, `tell`, `maill`,`idp`)
 VALUES ('$n','$a','$t','$e','$idp') ";
$res2=mysqli_query($cx,$sql2) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"ajout de laboratoire $n de proprite $nom $pre qvec succee"; 
}

}





mysqli_close($cx);

?>