<?php
$c=mysqli_connect("127.0.0.1","root","","sujet10");
$sql1="select * form voiture where disponible:D";
$res1=mysqli_query($c,$sql1) or die (mysqli_error($c));
echo"<table border='1'>
<tr>
    <td>mat vnt</td>
    <td>mod</td>
    <td>prix</td>
</tr>";
while ($t=mysqli_fetch_array($res1)) {
    echo"<tr>
    <td>$t[0]</td>
    <td$t[1]</td>
    <td>$t[2]</td>
</tr>";
}
echo"
</table>";
mysqli_close($c)
?>
