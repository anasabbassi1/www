function verif(){
    var c=document.getElementById("c").selectedIndex;
    var d=document.getElementById("d").value;
    var r1=document.getElementById("r1").checked;
    var r2=document.getElementById("r2").checked;
    var r3=document.getElementById("r3").checked;
    var r4=document.getElementById("r4").checked;
    var p=document.getElementById("p").value;

    if(c==0){
        alert("choisir une catégorie");
        return false;
    }
    if(10>=d.length){
        alert("min 10 carartre");
        return false;


    }
    if(d.length>=100){
        alert("min 10 carartre");
        return false;


    }
    if(!alpha(d)){
        alert("le premier chiffre doit etre alphabitque");
        return false;
    }
    // if(d[d.length]!=alpha(d)){
    //     alert("le premier chiffre doit etre alphabitque");
    //     return false;
        
    // }

    if(r1==r2 && r2==r3 && r3==r4){
        alert("choisr taille");
        return false;
       
        
    }
    if(100>=p){
        alert("un nombre entre 100 et 2000");
        return false;

    }
    if(p>=2000){
        alert("un nombre entre 100 et 2000");
        return false;
    }
    if(!chiffre(p)){
        alert("des chiffres ");
        return false;
    }
    if(d.length==""){
        alert("obligatoire description");
        return false;

    }



}
function chiffre(ch){
    i=0
    t=true
    while(ch.length<i && t){
    if(ch[i]>=0 && ch[i]<=9){
        i=i+1
    }
    else{
        t=false
    }
}
    return (t)
}
function alpha(ch) {
    t=true
    ch=ch.toLowerCase()
    if((ch[0]>="a" && ch[0]<="z") && (ch[ch.length -1 ]>="a" && ch[ch.length-1]<="z")){
       t=true
       
    }
    else{
        t=false
    }

    return (t)
}
function verif2(){
    var  h=document.getElementById("h").value;
    var  c=document.getElementById("c").value;
    var  l=document.getElementById("l").value;

    if (h < 1) {
        alert("min 1.");
        return false;
    } 

    if(c[0]<"0" || c[0]>"1"){
        alert("entre 0 et 1 premier chiffre");
        return false;
    }
    if (c.length !== 8 ) {
        alert("8 chiffres");
        return false;
    }

    if(!chiffre(c)){
        alert("chifree c");
        return false;
    }
    if(l>=1 && l<=4){
        alert("entre 1 et 4");
        return false;
    }
}