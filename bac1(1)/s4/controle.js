function verifier(){
    var n=document.getElementById("n").value;
    var p=document.getElementById("p").value;
    var s=document.getElementById("s").value;
    var no=document.getElementById("no").checked;
    var d=document.getElementById("d").checked;
    if(n.length!=8){
        alert(" doit 8");
        return false;
    }
    if(!chiff(n)){
        alert("ciffre");
        return false;
    }
    if(!alpha(p)){
        alert("majuscule et espace");
        return false;
    }
    if(Number(s)<50){
        alert("more 50");
        return false;
    }
    if(no===d){
        alert("pick one");
        return false;
    }

}
function chiff(ch){
    i=0;
    t=true;
    while(ch.length>i && t)
    if(ch[i]>="0" && ch[i]<="9"){
        i=i+1;

    }
    else{
        t=false;
    }
    return (t)
}
function alpha(ch){
    let i = 0;
    let spaceFound = false;
    let allUpperCase = true;

    while (i < ch.length && allUpperCase) {
        if (ch[i] === " ") {
            spaceFound = true;
        } else if (ch[i] < "A" || ch[i] > "Z") {
            allUpperCase = false;
        }
        i++;
    }

    return spaceFound && allUpperCase;
}


    