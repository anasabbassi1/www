<?php 
$p=$_POST["p"];
$s=$_POST["s"];

$cx=mysqli_connect("127.0.0.1","root","","bd123456");
$sql1="select * from membre where pseudo='$p'";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)<=0){
    echo"non valide";
}
else{
$sql2="select contenu from commentaire where pseudo='$p' and numsujet='$s' ";
$res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));
if(mysqli_num_rows($res2)<=0){
    echo"n o comnaitere";
}
else{
$sql3="DELETE  FROM commentaire where pseudo='$p' and numsujet='$s'";
$res3=(mysqli_query($cx,$sql3)) or die (mysqli_error($cx));

if(mysqli_affected_rows($cx)>0){
    echo"confirmation suppressipn";
}
}
}


mysqli_close($cx);
?>