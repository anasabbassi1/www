function verif(){
    var t=document.getElementById("t").value;
    var d=document.getElementById("d").value;
    if(t.length!=8){
        alert("doit etre 8");
        return false;
    }
    if(!chiffre(t)){
        alert("doit etre chiffre");
        return false
    }
    if(Dateformat(d)){
        alert("etre mot")
    }
}
function chiffre(ch){
    i=0;
    t=true;
    while(ch.length>i && t){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1;
        }
        else{
            t=false;
        }
        
    }
    return (t);
}
function Dateformat(d){

}