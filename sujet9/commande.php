<?php 
$tel=$_POST["tel"];
$no=$_POST["no"];
$q=$_POST["q"];
$m=$_POST["m"];
$cx=mysqli_connect("127.0.0.1","root","","bd123456789");
$sql1="select * from client where tel='$tel' and motpass='$m' ";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)==0){
    echo"N° tEL OU NMOT DE PASSE ERRONE";
}
else{
$date=date("Y-m-d H:i:s");
$sql2="INSERT INTO commande (`idprod`, `tel`, `datecmd`, `qtecmd`) VALUES ('$no', '$tel', '$date', '$q')";
$res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"operation reussite";
}

}
$sql1="select * from client";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
while($t=mysqli_fetch_array($res1)){
    echo $t['tel']. "<br>".$t['nom']. "<br>"  ;
}








?>