function verif() {
    nc=document.getElementById("nc").value;
    n=document.getElementById("n").value;
    p=document.getElementById("p").value;
    t=document.getElementById("t").value;
    if (nc.length!=8) {
        alert("err1 nc");
        return false;
    }
    if (!chiff(nc)) {
        alert("err2 nc");
        return false;
    }
    if (n.length<3) {
        alert("err1 n");
        return false;
    }
    if (!alph(n)) {
        alert("err2 n");
        return false;
    }
    if (p.length<3) {
        alert("err1 p");
        return false;
    }
    if (!alph(p)) {
        alert("err2 p");
        return false;
    }
    if (t.length!=8) {
        alert("err1 t");
        return false;
    }
    if (!chiff(t)) {
        alert("err2 t");
        return false;
    }
    if (t.charAt(0)=="0") {
        alert("err3 t");
        return false;
    }
    if (t.charAt(0)=="1") {
        alert("err3 t");
        return false;
    }
    if (t.charAt(0)=="6") {
        alert("err3 t");
        return false;
    }
}
function alph(ch) {
    b=true;
    i=0;
    ch=ch.toUpperCase();
    while (i<ch.length && b) {
        if (ch[i]>="A" && ch[i]<="Z") {
            i=i+1;
        }
        else{
            b=false;
        }
    }
    return (b);
}
function chiff(x) {
    b=true;
    i=0;
    while (i<x.length && b) {
        if (x[i]>="0" && x[i]<="9") {
            i=i+1;
        }
        else{
            b=false;
        }
    }
    return (b);

}