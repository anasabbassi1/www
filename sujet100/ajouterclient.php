<?php 
$nc=$_POST["nc"];
$n=$_POST["n"];
$p=$_POST["p"];
$t=$_POST["t"];
$cx=mysqli_connect("127.0.0.1","root","","bd1234567890");
$sql1="select * from client where ncin='$nc'";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)>0){
    echo"client existant";
}
else{
$sql2="INSERT INTO  client (`ncin`, `nom`, `prenom`, `tel`) VALUES ('$nc','$n','$p','$t')";
$res2=mysqli_query($cx,$sql2) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"client ajoute avec sucees";
}

}


?>