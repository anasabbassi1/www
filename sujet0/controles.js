function verif1(){
    c=document.getElementById("c").selectedIndex;
    d=document.getElementById("d").value;
    s=document.getElementById("s").checked;
    m=document.getElementById("m").checked;
    l=document.getElementById("l").checked;
    xl=document.getElementById("xl").checked;
    p=document.getElementById("p").value;
    if(c==0){
        alert("selection une option");
        return false;
    }
    if(d<=10){
        alert("doit etre more then 10");
        return false;
    }
    if(d>=100){
        alert("doit etre more then 10");
        return false;
    }

    if(!premier(d)){
        alert("d = premier");
        return false;
    }
    if(s==m && m==l && l==xl ){
        alert("choisir une button radio")
    }
    if(Number(p)<=100){
        alert("un nombre entre 100 et 2000");
        return false;
    }
    if(Number(p)>=2000){
        alert("un nombre entre 100 et 2000");
        return false;
    }
}
function verif2(){
    code=document.getElementById("code").value;
    cin=document.getElementById("cin").value;
    du=document.getElementById("du").value;
    if (code<1){
        alert("code doit etre sup de 1");
        return false;
    }
    if(!chiffre(code)){
        alert("code doit etre chiffre");
        return false;
    }
    if(cin.length!=8){
        alert("doit etre 8 chiffre");
        return false;
    }
    if(!chiffre(cin)){
        alert("cin doit etre chiffre");
        return false;
    }
    if(cin.charAt(0)!=0  &&  cin.charAt(0)!=1){
        alert("doit etre premier chiffre de cin 1 ou 0")
        return false;
    }
    if(du<1){
        alert("d doit etre entre 1 et 4") 
        return false;
    }
    if(du>4){
        alert("doit etre 4");
        return false;
    }
    if(!chiffre(du)){
        alert("duree doit etre chiffre");
        return false;
    }

}

function alpha(ch){
    i=0;
    ch=ch.toLowerCase()
    k=true
    while(i<ch.length && k){
        if(ch[i]>="a" && ch[i]<="z"){
            i=i+1
        }
        else{
            k=false
        }
    }
    return (k)
}
function chiffre(ch){
    i=0;
    k=true
    while(i<ch.length && k){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1
        }
        else{
            k=false
        }
    }
    return (k)
}
function premier(ch){
    i=0;
    ch=ch.toLowerCase();
    k=true
    while(i<ch.length && k){
        if((ch[0]>="a" && ch[0]<="z" )&&(ch[ch.length -1]>="a" && ch[ch.length -1 ]<="z")){
            i=i+1
            
        }
        else{
            k=false
        }
    }
    return (k)
}