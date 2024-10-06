<?php 

$cx=mysqli_connect("127.0.0.1","root","","gestion_orientationn");
$sql1="select * from institut";
$res1=(mysqli_query($cx,$sql1)) or die(mysqli_error($cx));
if (mysqli_num_rows($res1)<=0){
    echo"famech";
}else {
    echo "  <table border=1>
    <tr>
        <th>code institut</th>
        <th> nom de l institut</th>
        <th> score admission a l institut</th>
    </tr>
";
while($r=mysqli_fetch_array($res1)){
    echo"<tr>
    <td>".$r['code_inst']."</td>
    <td>".$r['nom_inst']."</td>
    <td>".$r['score_inst']."</td>
    </tr>";
}













echo"    
</table>";
}












mysqli_close($cx);

?>