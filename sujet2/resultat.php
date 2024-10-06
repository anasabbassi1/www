<?php 
$cx = mysqli_connect("127.0.0.1", "root", "", "bd12345");
$sql1 = "SELECT P.nom, P.prenom, E.numc FROM vote E, eleve P WHERE E.nume = P.num";
$res1 = mysqli_query($cx, $sql1) or die(mysqli_error($cx));
if (mysqli_num_rows($res1) > 0) {
    echo "<table border='1'>
    <tr>
    <td>nom</td>
    <td>prenom</td>
    <td>numc</td>
    </tr>";
    while ($r = mysqli_fetch_array($res1)) {
        echo "<tr>
        <td>".$r['nom']."</td>
        <td>".$r['prenom']."</td>
        <td>".$r['numc']."</td>
        </tr>";
    }
    echo "</table>";
}
mysqli_close($cx);
?>