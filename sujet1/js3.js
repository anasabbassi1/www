function verif(){
    var p=document.getElementById("p").value;
    var s=document.getElementById("s").value;
    if(p<=6){
        alert(" min 6 caractere")
        return false;

    }
    if(s==="0"){
        alert(" choisir sujet ")
        return false;
    }
}