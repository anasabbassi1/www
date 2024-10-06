<?php
$t=$_POST["t"];
$d=$_POST["d"];

$cx=mysqli_connect("127.0.0.1","root","","bd1");
$sql1="select * from client where  telclt='$t'";
$res1=(mysqli_query($cx,$sql1))or die(mysqli_error($cx));
if(mysqli_num_rows($res1)<=0){
    echo" inexistant";

}
else{
$sql2="select * from reclamation  where etat='N' and telclt='$t'";
$res2=(mysqli_query($cx,$sql2))or die(mysqli_error($cx));
if(mysqli_num_rows($res2)<=0){
    echo" aucune reclamtion";
}
else{
$sql3="update reclamation 
set `etat`='O' , `daterep`='$d'
where telclt='$t'";
$res3=(mysqli_query($cx,$sql3))or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo" opp reussite";


}



}
}
mysqli_close($cx);
?>