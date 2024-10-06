<?php
$cx=require('can.php');
$sql1="select b.nomp , b.prenomp , b.mailp, b.telp, p.noml , p.adrl , p.maill from photographie b, loboratoire p 
where b.idp=p.idp  ";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
echo"
<table border='1'>
<tr>
<td>nom& prenom</td>
<td> email</td>
<td> tel</td>
<td> laboraoitre</td>
<td> adresse labo</td>
<td>email </td>
</tr>";
while($t=mysqli_fetch_array($res1)){
          echo"  <tr>
                <td>".$t['nomp'].$t['prenomp']."</td>
                <td>".$t['mailp']."</td>
                <td>".$t['telp']."</td>
                <td>".$t['noml']."</td>
                <td>".$t['adrl']."</td>
                <td>".$t['maill']."</td>
            </tr>
    ";
}
echo"</table>";




mysqli_close($cx);
?>
