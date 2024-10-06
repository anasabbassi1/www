<?php
$nc=$_POST["nc"];
$n=$_POST["n"];
$p=$_POST["p"];
$t=$_POST["t"];
$c=mysqli_connect("127.0.0.1","root","","sujet10");
$sql1="select * from client where ncin='$nc'";
$res1=mysqli_query($c,$sql1) or die (mysqli_error($c));
if (mysqli_num_rows($res1)>0) {
    echo"client mawjoud";
}
else {
    $sql2="insert into client values ('$nc','$n','$p','$t')";
    $res2=mysqli_query($c,$sql2) or die (mysqli_error($c));
    if (mysqli_affected_rows($c)>0) {
        echo"client ajouter avec succes";
    }
}
mysqli_close($c)
?>