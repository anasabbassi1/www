<?php
    $cx=mysqli_connect("127.0.0.1", "root", "", "airbnb");
    
    $nl=$_POST["nl"];
    $na=$_POST["na"];
    $dt=$_POST["dt"];
    $dr=$_POST["dr"];

    $sql1="SELECT * FROM Locataire WHERE idLoc='$nl'";
    $res1 = mysqli_query($cx, $sql1);

    if(mysqli_num_rows($sql1)==0){
        echo"Locataire non existant";
    }else{
        $sql2="SELECT * FROM Appartement WHERE idApp='$na'";
        $res2 = mysqli_query($cx, $sql2);

        if(mysqli_num_rows($res2)==0){
            echo"Appartement non existant";
        }else{
            $sql3="SELECT etat FROM Appartement WHERE idApp='$na'0";
            $res3 = mysqli_query($cx, $sql3);

            $t=mysqli_fetch_array($res3);

            if($t[0]=="Réservé"){
                echo"Appartement non disponible";
            }else{
                $dat = date("Y-m-d");
                $sql4="INSERT INTO Booking
                VALUES('$na','$nl','$dat','$dt','$dr','0')";
                mysqli_query($cx, $sql4);

                echo"Réservation faite avex succées";
            }
        }
    }

    mysqli_close($cx);
?>