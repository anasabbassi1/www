<?php 
$s=$_POST["s"];
$e=$_POST["e"];
$x=(string)$s."TU".(string)$e;
$cx=mysqli_connect("127.0.0.1","root","","bd1234567890");
$sql1="select * from voiture where imat='$x' ";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)==0){
    echo" voiture inexistante";
    
}
else{
    $d=date("Y-m-d H:i:s");
    echo"attention! verifier le numero d'immatriculation de la voiture";
    $sql2="UPDATE voiture SET disponible='D' where imat='$x'";
    $sql3="UPDATE louer SET dateret = '$d'
     WHERE louer.imat='$x' ";
    $res3=(mysqli_query($cx,$sql3)) or die(mysqli_error($cx));
    $res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"retour enregistre avec succes";
}








}


?>