function verif1(){
    nc=document.getElementById("nc").value;
    n=document.getElementById("n").value;
    p=document.getElementById("p").value;
    t=document.getElementById("t").value;
    if(nc.length!=8){
        alert("nc");
        return false;
    }
    if(n.length<3){
        alert("n");
        return false;
    }
    if(p.length<3){
        alert("p");
        return false;
    }
    if(!alpha(n)){
        alert("alpha de n ");
        return false;
    }
    if(!alpha(p)){
        alert("alpha de p");
        return false;
    }
    if(t.length!=8){
        alert("tel ");
        return false;
    }
    if(t[0]==0){
        alert("mouch 0");
        return false;
    }
    if(t[0]==1){
        alert("mouch 1");
        return false;
    }
    if(t[0]==6){
        alert("mouch 6");
        return false;
    }
    if(!chiffre(t)){
        alert("fonction chhiffre");
        return false;
    }

}
function verif2(){
    s=document.getElementById("s").value;
    e=document.getElementById("e").value;
    if(s.length!=3){
        alert("doit etre 3")
        return false;
    }
    if(!chiffre(s)){
        alert("fonction chhiffre");
        return false;
    }
    if(e<1){
        alert("doit etre 1 et 9999");
        return false;
    }
    if(e>9999){
        alert("doit etre 1 et 9999");
        return false;
    }
    if(!chiffre(e)){
        alert("fonction chhiffre");
        return false;
    }
}
function alpha(ch){
    ch=ch.toLowerCase()
    i=0
    k=true
    while(i<ch.length && k)
        if(ch[i]>="a" && ch[i]<="z"){
            i=i+1
        }
        else{
            k=false
        }
        return (k)
}
function chiffre(x){
    i=0
    k=true
    while(i<x.length && k)
        if(x[i]>="0" && x[i]<="9"){
            i=i+1
        }
        else{
            k=false
        }
        return (k)
}