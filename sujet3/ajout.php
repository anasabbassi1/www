<?php
$t=$_POST["t"];
$c=$_POST["c"];
$d=$_POST["d"];
$cx=mysqli_connect("127.0.0.1","root","","bd1");
$sql1="select telclt from client  where telclt='$t'";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)<=0){
    echo"se client n est pas enrigstre";
}
else{
$sql2="select numrec from reclamation where telclt='$t' and etat='N'";
$res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));
if(mysqli_num_rows($res2)>0){
    echo"sadme une reclamation non encore traite";
}
$x=date("Y-m-d H:i:s");
$sql3="insert into reclamation(`telclt`,`idcat`,`description`,`etat`,`daterec`) values('$t','$c','$d','N','$x') ";
$res3=(mysqli_query($cx,$sql3)) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo" ajout reussite";

}



mysqli_close($cx);
}
?>