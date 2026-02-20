 
 function getvalurfrom(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value)
    
    return value
 }



 function getblance(){
    const blanceElement = document.getElementById("blance");
    const blance = blanceElement.innerText;
    console.log('current blance', Number(blance))
     return Number(blance)
 }

 function setblance(value){
     const blanceElement = document.getElementById("blance");
     blanceElement.innerText = value;
 }


 function showly(id){
   
    const addmoney = document.getElementById("add-money")
    const cashout = document.getElementById("cashout")
    const history = document.getElementById("history")
     addmoney.classList.add("hidden");
     cashout.classList.add("hidden");
     history.classList.add("history");

    const seleted = document.getElementById(id)
    seleted.classList.remove("hidden")
 }