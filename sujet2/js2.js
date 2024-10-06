function verif(){
    var e=document.getElementById("e").value;
    var a=document.getElementById("a").checked;
    var b=document.getElementById("b").checked;
    var d=document.getElementById("d").checked;
    var t=document.getElementById("t").checked;
    if(e.length!=4){
        alert("chiane de 4 chiffres");
        return false;
    }
    if(!chiffre(e)){
        alert(" des chiffres");
        return false;
    } if ( (!b && !d )) {
        alert("dddd");
        return false;
    }
    if ((!a && !t)) {
        alert("Veuillez sélectionner un candidat par catégorie (Fille ou Garçon).");
        return false;
    }   

}
function chiffre(ch){
  v=true;
  i=0;
  while(i<ch.length && v){
    if(ch[i]>="0" && ch[i]<="9"){
        i=i+1;
    }
    else{
        v=false;
    }
  }
  return(v);
}
