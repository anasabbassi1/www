<?php

$n = $_POST["n"];
$c = $_POST["c"];
require 'conexion.php';

$sql1 = "SELECT num_profil FROM profil WHERE num_profil='$n'";
$res1 = mysqli_query($con, $sql1) or die(mysqli_error($con));

if (mysqli_num_rows($res1) <= 0) {
    echo "Numéro profil non reconnu";
} else {
    while ($row1 = mysqli_fetch_array($res1)) {
        $sql2 = "SELECT P.experience, O.annee_exp, P.diplome, O.niveau 
                FROM profil P, poste O, candidature C 
                WHERE P.num_profil='$n' 
                AND P.num_profil=C.num_profil 
                AND O.num_poste=C.num_poste";

        $res2 = mysqli_query($con, $sql2) or die(mysqli_error($con));

        while ($row2 = mysqli_fetch_array($res2)) {
            if ($row2["experience"] < $row2["annee_exp"]) {
                echo "Profil non compatible";
            } else {
                $x = date("Y-m-d");
                $num_poste = $c; // Assuming $c holds the correct value for num_poste
                $sql3 = "INSERT INTO candidature (num_poste, num_profil, date_cand) 
                         VALUES ('$num_poste', '$n', '$x')";

                $res3 = mysqli_query($con, $sql3) or die(mysqli_error($con));
                if (mysqli_affected_rows($con) > 0) {
                    echo "C'est bon";
                } else {
                    echo "Pas bon";
                }
            }
        }
    }
}

mysqli_close($con);
?>
