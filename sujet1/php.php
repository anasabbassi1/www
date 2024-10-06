<?php 
$p=$_POST["p"];
$s=$_POST["s"];
$c=$_POST["c"];
$cx=mysqli_connect("127.0.0.1","root","","bd123456");
$sql1="select * from membre where pseudo='$p'";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)<=0){
echo" non valable";
}
else{
$x=date("Y-m-d H:i:s");
$sql2="insert into commentaire (`contenu`,`pseudo`,`numsujet`,`datecom`) values('$c','$p','$s','$x')";
$res2=(mysqli_query($cx,$sql2)) or die (mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo " oppertaion reussite";
}
}


?>