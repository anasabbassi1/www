function verif(){
    var u=document.getElementById("u").value;
    var o=document.getElementById("o").value;
    var p=document.getElementById("p").value;
    var f=document.getElementById("f").checked;
    var g=document.getElementById("g").checked;
    var n=document.getElementById("n").value;
    if (u.length!=4){
        alert(" chaine de 4 caractere");
        return false;
    }
    if(!chiffre(u)){
        alert("donne des chiffre")
        return false;
    }    
    if(o<=0){
        alert("nom");
        return false;
    }
     if(!alpha(o)){
        alert("chaine alphabitoque");
        return false;
    }
    if(p<=0){
        alert("ecrire prenom");
        return false;
    }
    if(!alpha(p)){
        alert("chaine alphabitoque");
        return false;
    }
    if (!f && !g) {
        alert("choix obligatoire");
        return false; 
    }
    
    if(n==="0"){
        alert("prend ton choix");
        return false;
    }
    
 
}
function alpha(ch){
    b=true;
    i=0;
    ch=ch.toUpperCase();
    while(i<ch.length && b){
        if(ch[i]>="A" && ch[i]<="Z"){
            i=i+1;
        }
        else{
            b=false;
        }

    }
    return (b);
}
    


function chiffre(ch){
    b=true;
    i=0;
    while(i<ch.length && b){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1;
        }
        else{
            b=false;
        }

    }
    return (b);
    

}