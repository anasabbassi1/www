function verif(){
    var c=document.getElementById("c").value;
    var n=document.getElementById("n").value;
    if (c.length!=8){
        alert("doit etre 8");
         return false;
    }
    if(!chiffre(c)){
        alert("des chiffre");
        return false;

    }
    if(c[0]!="0" && c[0]!="1"){
        alert("doit etre 1 ou 0");
        return false;
    }
    if(!chiffre(n)){
        alert("des chiffre");
        return false;

    }
    if (n.length!=8){
        alert("doit etre 8");
         return false;
    }
    if(n[0]==="0"){
        alert("ne doit pas etre 0");
        return false;
    }
}

function chiffre(ch){
    i=0
    t=true
    while(i<ch.length && t){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1
        }
        else{
            t=false
        }
    }
    return t
}