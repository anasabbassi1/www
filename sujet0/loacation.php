<?php 
$code=$_POST['code'];
$cin=$_POST['cin'];
$du=$_POST['du'];


$cx=mysqli_connect("127.0.0.1","root","","sujte0");
$sql1="select * from habit where codehab='$code'";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)==0){
    echo"Erreur: habit inexistant";
}
else{
$sql2="select * from habit where codehab='$code' and disponible='N' ";
$res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));
if(mysqli_num_rows($res2)!=0){
    echo"Erreur: deja loué";

}
else{
    $sql3="select * from client where cin='$cin'";
    $res3=(mysqli_query($cx,$sql3)) or die(mysqli_error($cx));
    if(mysqli_num_rows($res3)==0){
        echo"Erreur: client inexistant";
        
    } else{
        $d=date("Y-m-d");
        $sql4="INSERT INTO  location (`dateloc`, `codehab`, `cin`, `duree`)
         VALUES ('$d','$code','$cin','$du')";
         $sql5="UPDATE habit 
         SET disponible='N' where codehab='$code'";
        $res5=(mysqli_query($cx,$sql5)) or die(mysqli_error($cx));
        $res4=(mysqli_query($cx,$sql4)) or die(mysqli_error($cx));
        if(mysqli_affected_rows($cx)>0){
            echo"location effectuee avec suecces";
        }
        
    }
}

}
    



























mysqli_close($cx);


?>