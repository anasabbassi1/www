
function chiffre(ch){
    i=0
    ok=true
    while((ok)&&(i<ch.length)){
        if((ch[i]>="0")&&(ch[i]<="9")){
            i++
        }
    else
      ok=false
    }
        return ok
}
function verif(){
    nm=document.getElementById('nm').value;
    np=document.getElementById('np').value;
    date=document.getElementById('nm').date;
    duree=document.getElementById('duree').value;
    check=document.getElementById('check');
    if(check.Checked==0){
        alert("choisir obligatoir");
        return false;
    }
if(duree.length<=1){
    alert("akber mon wa7ed ");
    return false;
}
if(!chiffre(duree)){
    alert("par des chiffre");
    return false;
}


}