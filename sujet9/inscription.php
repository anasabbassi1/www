<?php 
$tel=$_POST["tel"];
$n=$_POST["n"];
$p=$_POST["p"];
$a=$_POST["a"];
$m=$_POST["m"];
$cx=mysqli_connect("127.0.0.1","root","","bd123456789");
$sql1="select * from client where tel='$tel' ";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)==0){
$sql2="insert into client (`tel`,`nom`,`prenom`,`adresse`,`motpass`) values('$tel','$n','$p','$a','$m')";
$res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"inscription affectuee avec succes";


}

}
else{
    $sql3="select * from client where tel='$tel' and nom='$n'and prenom='$p' ";
    $res3=(mysqli_query($cx,$sql3)) or die(mysqli_error($cx));
    if(mysqli_num_rows($res3)!=0){
        echo" existe deja dan la base";
    }
    else{
    $sql4="select * from client where tel='$tel' and nom<>'$n'and prenom<>'$p' ";
    $res4=(mysqli_query($cx,$sql4)) or die(mysqli_error($cx));
    if(mysqli_num_rows($res4)!=0){
        echo" Erreur tel, nom ou preno errone!";




    }
}


}









mysqli_close($cx)?>