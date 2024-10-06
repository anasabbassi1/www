function verif(){
    var p=document.getElementById("p").value;
    var s=document.getElementById("s").value;
    var c=document.getElementById("c").value;
    if(p<=6){
        alert("min 6 caractere");
        return false;
    }

    if(s==="0"){
        alert("choisir un sujet");
        return false;

    }
    if(c<=0){
        alert("ecrire un commentaires")

    }
}