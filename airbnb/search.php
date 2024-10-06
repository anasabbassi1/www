<?php
$s=$_POST["s"];
$pb=$_POST["pb"];
$pe=$_POST["pe"];
$c=$_POST["c"];
$cx=mysqli_connect("127.0.0.1","root","","airbnb");
$sql1="select * from appartement where address='$s'and prix>$pb and prix<$pe";
$sql2="select * from appartement where address='$s'and prix>$pb and prix<$pe order by prix";
if($c==false){
    $res1=mysqli_query($cx,$sql1) or die("sql1",mysqli_erreur($cx));
    echo"<table>
    <th>
    titre
    </th>
    <th>address</th>
    <<th>nombre chambre</th>
    <th>nombre wc</th>>
    <th>equipement</th>
    <th>etat</th>
    <th>prix</th>";
    while($t=mysqli_fetch_array($res1)){
        echo"<tr>
        <td>$t[1]</td>
        <td>$t[2]</td>
        <td>$t[3]</td>
        <td>$t[4]</td>
        <td>$t[5]</td>
        <td>$t[6]</td>
        <td>$t[7]</td>
        </tr>";

    }
    echo"</table>";
else{
    $res2=mysqli($cx,$sql1) or die("sql2",mysqli_error($cx));
    while($t2=mysqli_fetch_array($res2)){
        echo"<tr>
        <td>$t[1]</td>
        <td>$t[2]</td>
        <td>$t[3]</td>
        <td>$t[4]</td>
        <td>$t[5]</td>
        <td>$t[6]</td>
        <td>$t[7]</td>
        </tr>";
    }
    echo"</table>";
}
        
    }
?>
