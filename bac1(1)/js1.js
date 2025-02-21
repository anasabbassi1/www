function verif(){
    p=document.getElementById("p").value;
    s=document.getElementById("s").value;
    c=document.getElementById("c").value;
    if(p<=6){
        alert("6 min caractere");
    }
    if(s==="0"){
        alert("choisi une categorie ");

    }
    if(c<=0){
        alert("ecrire haja ");

    }
}