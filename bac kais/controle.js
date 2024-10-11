function chiffre(ch){
    let i=0;
    while (i<ch.length && ch.charAt(i)>="0" && ch.charAt(i)<="9"){
    i++;
    }
    return (i==ch.length);
    }
    function alphabet(ch){
    let i=0;
    ch=ch.toUpperCase();
    while (i<ch.length && ch.charAt(i)>="A" && ch.charAt(i)<="Z"){
    i++;
    }
    return (i==ch.length);
    }
    function verif1(){
        var pre=document.getElementById("prenom").value ;
        var nom=document.getElementById("nom").value ;
        var p=document.getElementById("permis").value ;
    ch1=p.substr(0,2);
    ch2=p.substr(3,5);
    if (p.length != 8 || p.charAt(2)!= "/" || !(chiffre(ch1) ||
    !(chiffre(ch2))) ){
    alert("Permis invalide");
    return false;
    }
   
    
    if (nom.length <3 || nom.length > 20 || !(alphabet(nom)) ){
    alert("Nom invalide");
    return false;
    }
  
   
    if (pre.length <3 || pre.length > 20 || !(alphabet(pre)) ){
    alert("Prénom invalide");
    return false;
    }
}