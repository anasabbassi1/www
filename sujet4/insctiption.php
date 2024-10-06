<?php 
$n=$_POST["n"];
$p=$_POST["p"];
$s=$_POST["s"];
$r=$_POST["r"];
$cx=mysqli_connect("127.0.0.1","root","","gestion_orientationn");
$sql1="select ncin from candidat where ncin='$n'";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)<=0){
$sql2="insert into candidat values('$n','$p','$s','$r')";
$res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo "ajoute reussi";
}

}
else{
    $sql3="select * from candidat where ncin='$n' and nom_prenom='$p'";
    $res3=(mysqli_query($cx,$sql3)) or die(mysqli_error($cx));
    if(mysqli_num_rows($res3)!=0){

        echo"deja majwoud";
    }else{
        $sql4="select * from candidat where ncin='$n' and nom_prenom!='$p'";
        $res4=(mysqli_query($cx,$sql4)) or die(mysqli_error($cx));
        if(mysqli_num_rows($res4)!=0){
    
            echo"cin et nom incorred";
        }

    }

}
mysqli_close($cx);
?>