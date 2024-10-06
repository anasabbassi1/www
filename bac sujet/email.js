function verif(){
    eml=document.getElementById("eml").value;
  r1=document.getElementById("r1").checked;
   r2=document.getElementById("r2").checked;


if(!chiffr (eml.charAt(eml.length -3))){
   alert("shih")
   return false;
}
if(!chiffr (eml.charAt(eml.length -2))){
   alert("shih")
   return false;
}
if(!chiffr (eml.charAt(eml.length -1))){
   alert("shih")
   return false;
}
//  if(eml.indexOf("@")!= eml.lastIndexOf("@") ){
   //    alert("email @");
   //    return false;
   //  }
   //  if(eml.indexOf("@")==-1){
      //    alert("lezem @");
      //    return false;
      
      //  }
      //  ch=eml.substr(0,eml.indexOf("@"))
      //  if(ch==""){
         //    alert("lezem @");
         //    return false;
         //  }
         //  if(eml.indexOf(".")!= eml.lastIndexOf(".") ){
            //    alert("email . ");
            //    return false;
            //  }
            //  if(eml.indexOf(".")==-1){
               //    alert("lezem .");
               //    return false;
               
               //  }
               //  ch1=eml.substr(eml.indexOf("."),eml.length)
   //  if(ch1=="."){
      //    alert("lezem .");
      //    return false;
      //  }
      
   }
   function chiffr(ch){
      i=0;
      k=true;
      while(i<ch.length && k){
         if(ch[i]>="0" && ch[i]<="9"){
            i=i+1;
         }
         else{
            k=false
         }
      }
      return (k)
   }
   