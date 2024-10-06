<?php 
$cx=mysqli_connect("127.0.0.1","root","","bd1234567890");

$sql1="SELECT * FROM voiture";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if(mysqli_num_rows($res1)==0){
    echo" n' exite oas dan la chaine";
}
else{
    echo"<table border='1'>
    <tr>
        <td>matricule voirture</td>
        <td>modele voiture</td>
        <td>prix de location</td>
    </tr>
    ";
    while($x=mysqli_fetch_array($res1)){
      
        echo"<tr>
        <td>".$x['imat']."</td>
        <td>".$x['model']."</td>
        <td>".$x['prixloc']."</td>
        </tr>";
        
    } 
    echo"</table>";
}


mysqli_close($cx)
?>
