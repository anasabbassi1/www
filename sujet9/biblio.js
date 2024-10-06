// function verif1(){
//     n=document.getElementById("n").value;
//     p=document.getElementById("p").value;
//     tel=document.getElementById("tel").value;
//     a=document.getElementById("a").value;
//     m=document.getElementById("m").value;
//     c=document.getElementById("c").value;
//      if(!alpha(n)){
//          alert("doit etre alphabitique");
//          return false;

//     }
//     if(n.length<3){
//         alert("nom < 3 ");
//         return false;
//     }
//      if(!alpha(p)){
//          alert("doit etre alphabitique");
//          return false;

//      }
//     if(p.length<3){
//         alert("nom < 3 22");
//         return false;
//     }


//     if(tel.length!=8){
//         alert("doit etre 8 chiffre");
//         return false;
//     }


//     if(!chiffre(tel)){
//         alert(" doit etre chiffre");
//         return false;
//     }
    
//     if(tel[0]<=1){
//         alert("doit etre different de 0 et 1 ");
//         return false;
//     }


//     if(a.length<10){
//         alert("nom < 10 ");
//         return false;
// }
//     if(m.length!=6){
//         alert("doit etre 6");
//         return false;
//     }
//     if(!espace(m)){
//         alert("ne contient pas des espace");
//         return false;
        

//     }
//     if(m!==c){
//         alert("identique");
//         return false;
//     }
    
// }




function alpha(ch){
    i=0;
    t=true;
    ch=ch.toLowerCase()
    while(i<ch.length && t){
        if(ch[i]>="a" && ch[i]<="z"){
            i=i+1;
        }
        else{
            t=false;
        }
    }
    return (t)
}
function chiffre(ch){
    i=0;
    t=true;
    while(i<ch.length && t){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1;
        }
        else{
            t=false;
        }
    }
    return (t)
}
function espace(ch){
    i=0;
    t=true;
    while(i<ch.length && t){
        if(ch[i]!=" "){
            i=i+1;
        }
        else{
            t=false;
        }
    }
    return (t)
}
function verif2(){
    no=document.getElementById("no").selectedIndex;
     q=document.getElementById("q").value;
     tel=document.getElementById("tel").value;
    // a=document.getElementById("a").value;
 m=document.getElementById("m").value;
    // c=document.getElementById("c").value;
    if(no==0){
        alert("choisir une option");
        return false;
    }
    if(q<1){
        alert("doit etre copris entre 1 et 5");
        return false;
    }   if(q>5){
        alert("doit etre copris entre 1 et 5");
        return false;
    }
        if(tel.length!=8){
        alert("doit etre 8 chiffre");
        return false;
    }


    if(!chiffre(tel)){
        alert(" doit etre chiffre");
        return false;
    }
    if(!espace(m)){
                alert("ne contient pas des espace");
                return false;

}}