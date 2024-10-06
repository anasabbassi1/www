function valid(){
    n=document.getElementById("n").value;
    c=document.getElementById("c").selectedIndex;
    if(n===""){
        alert("obligatoire ")
    }
    if(!chiffre(n)){
        alert("chiffre ")
    }
    if(c===0){
        alert("select ")
    }
    

    

}
function chiffre(ch){
    t=true;
    i=0;
    while(t && i<ch.length){
        if(ch[i]>="0" && ch[i]<="9"){
            i=i+1
        }
        else{
            t=false
        }
    }
    return t
}