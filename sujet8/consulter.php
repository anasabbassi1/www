<?php 
$c=$_POST["c"];
$n=$_POST["n"];
$cx=mysqli_connect("127.0.0.1","root","","1234568");
$sql1="select cin from abonne where cin='$c'";
$sql2="select num from ligne where num='$n'";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
$res2=(mysqli_query($cx,$sql2)) or die(mysqli_error($cx));

if(mysqli_num_rows($res1)<=0 && mysqli_num_rows($res2)<=0 ){
    echo"cin ou numero de la ligne errone ";
}
else{
$sql3="select A.nom,A.prenom,L.soldebonus,L.pointsbonus,L.datebonus from ligne L,abonne A
where A.cin='$c' and L.num='$n' and 
A.cin=L.cin";
$res3=(mysqli_query($cx,$sql3)) or die(mysqli_error($cx));
if(mysqli_num_rows($res3)>0){
    echo"bievenu dans note ville ";
    while($x=mysqli_fetch_array($res3)){
        echo $x["nom"] ."<br>". $x["prenom"]."<br>". $x["soldebonus"]."<br>". $x["pointsbonus"]."<br>". $x["datebonus"];
    }
}
}





mysqli_close($cx)
?>