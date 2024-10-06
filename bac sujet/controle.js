function verifier(){
    n=document.getElementById("n").value;
    p=document.getElementById("p").value;
    t=document.getElementById("t").value;
    e=document.getElementById("e").value;
    a=document.getElementById("a").value;
    h=document.getElementById("h").checked;
    f=document.getElementById("f").checked;
    m=document.getElementById("m").value;

    if(n.length==0){
        alert("n obligatoire")
    }
    if(!alpha(n)){
        alert("n alpha");
        return false;
    }
    if(p.length==0){
        alert("p obligatoire")
    }
    if(!alpha(p)){
        alert("p alpha");
        return false;
    }
    if(t.length==0){
        alert("t obligatoire")
    }
    if(t.length!=11){
        alert("doit etre 11 chiffre")
    }
   if(t.charAt(0)=2){
    alert(" doit commence par 216")
   }
   if(t.charAt(0)=1){
    alert(" doit commence par 216")
   }
   if(t.charAt(0)=6){
    alert(" doit commence par 216")
   }
   
    if(e.length==0){
        alert("e obligatoire")
    }
    if(a.length==0){
        alert("a obligatoire")
    }
    if(m.length==0){
        alert("m obligatoire")
    }
    if(e.indexOf("@") && e.LastindexOf(".")){
        alert("doit etre @ et . ")
    }

   

}
function valider(){
    n=document.getElementById("n").value;
    p=document.getElementById("p").value;
    t=document.getElementById("t").value;
    e=document.getElementById("e").value;
    a=document.getElementById("a").value;

    if(n.length==0){
        alert("n obligatoire")
    }
    if(!alpha(n)){
        alert("n alpha");
        return false;
    }
    if(p.length==0){
        alert("p obligatoire")
    }
    if(!alpha(p)){
        alert("p alpha");
        return false;
    }
    if(t.length==0){
        alert("t obligatoire")
    }
    if(t.length!=8){
        alert("doit etre 11 chiffre")
    }
    if(e.length==0){
        alert("e obligatoire")
    }
    if(a.length==0){
        alert("a obligatoire")
    }
    if(p.indexOf(" ")==-1){
        alert("mehech mawjouda");
        return false;
    }
    if(p.indexOf(" ")!=p.lastIndexOf(" ")){
        alert("doit etre ione time ");
        return false;

    }
    ch=p.substr(0,p.indexOf(" "))
    if(ch==""){
        alert("lezem tkoun fi west");
        return false;
    }
    ch1=p.substr(p.indexOf(" "),p.length)
    if(ch1==" "){
        alert("lezem tkoun fi west");
        return false;
    }
    if (
       !chiffre( a.charAt(a.length - 4))
    ) {
        alert("Les derniers 4 caractères doivent être des chiffres.");
        return false;
    }
    if (
        !chiffre( a.charAt(a.length - 1))
     ) {
         alert("Les derniers 4 caractères doivent être des chiffres.");
         return false;
     }
     if (
        !chiffre( a.charAt(a.length - 3))
     ) {
         alert("Les derniers 4 caractères doivent être des chiffres.");
         return false;
     }
     if (
        !chiffre( a.charAt(a.length - 2))
     ) {
         alert("Les derniers 4 caractères doivent être des chiffres.");
         return false;
     }

    
       
    if(isNaN(a.charAt(a.length)-3)){
        alert("les dernier 4 chiffre doit etre code psotel");
        return false;
    }
    if(isNaN(a.charAt(a.length)-2)){
        alert("les dernier 4 chiffre doit etre code psotel");
        return false;
    }
    if(isNaN(a.charAt(a.length)-1)){
        alert("les dernier 4 chiffre doit etre code psotel");
        return false;
    }

}
function alpha(ch){
    i=0;
    ch=ch.toLowerCase();
    k=true;
    while(i<ch.length && k){
        if(ch[i]>="a" && ch[i]<="z" || ch[i]==" "){
            i=i+1
        }
        else{
            k=false;
        }

    }
    return (k)
}function chiffre(ch){
    i=0;
    k=true;
    while(i<ch.length && k){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1
        }
        else{
            k=false;
        }

    }
    return (k)
}