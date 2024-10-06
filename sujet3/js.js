function verif(){
    var t=document.getElementById("t").value;
    var c=document.getElementById("c").value;
    var d=document.getElementById("d").value;
    if(t.length!=8){
        alert("compose de 8 chiffre");
        return false;
    }
    if(!chiffre(t)){
    alert("doit etres chiffre");
    return false;
    }
    if(c==="0"){
        alert("choisir une categorie");
        return false;
    }


    if(c==="4" && d<=0){ 
        alert("si votre champ est doit ecrire la discription");
        return false;
        
    }
}
function chiffre(ch){
    i=0;
    t=true;
    while(ch.length>i && t){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1
        }
        else{
            t=false;
        }
    }
    return (t);

}