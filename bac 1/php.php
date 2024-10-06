<?php

$p=$_POST["p"];
$s=$_POST["s"];
$c=$_POST["c"];
$cx=mysqli_connect("127.0.0.1","root","","bac1");
$sql1="select * from membre where pseudo="$p"";
$res1=mysqli_query($cx,$sql1) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)){
    echo"no valide"
}
else{
    $sql2="select contenu from commentaire where pseudo='$p' and numsujet='$s' ";
    $res2=mysqli_query($cx,$sql2) or die(mysqli_error($cx));
    if(mysqli_num_rows($res2)<=0) {
        echo"il ne fait pas un commentaire";
    }
    else{
    $sql3="select contenu from commentaire where pseudo='$p' and numsujet='$s' ORDER BY datecom DESC";
    $res3=mysqli_query($cx,$sql3) or die(mysqli_error($cx));
    while($r=mysqli_fetch_array($res3)){
        echo $r['contenu'] . "<br>" ;
    }
    }
    
    
    }
    
    mysqli_close($cx);


?>