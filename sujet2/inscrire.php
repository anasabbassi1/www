<?php
$u=$_POST['u'];
$o=$_POST['o'];
$p=$_POST['p'];
$r=$_POST['r'];
$n=$_POST['n'];

$cx=mysqli_connect("127.0.0.1","root","","bd12345");
$sql1="select num from eleve where num='$u'";
$res1=mysqli_query($cx,$sql1)or die(mysqli_error($cx));
if(mysqli_num_rows($res1)>0){
    echo"eleve deja inscrit";
}
else{
$sql2="insert  into eleve (`num`,`nom`,`prenom`,`genre`,`niveau`,`candidat`) values('$u','$o','$p','$r','$n','N')";
$res2=mysqli_query($cx,$sql2) or die(mysqli_error($cx));
if(mysqli_affected_rows($cx)>0){
    echo"ajout reussite";
}
}






mysqli_close($cx);
?>