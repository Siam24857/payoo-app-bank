document.getElementById("add-money-btn").addEventListener("click", function(){
    const  bankAmount = getvalurfrom("addmoneky-ban")
    if(bankAmount == "Select a Bank"){
        alert("plesew Select a bank");
        return
    }

    const accno = getvalurfrom("add-moneynumber")
    if(accno.length != 11){
        alert("Invalid acc no")
        return
    }
    const amount = getvalurfrom("add-money-Amoubnt")

     const currentblance = getblance(amount);
    const newBlance = currentblance + Number(amount)
    

     const pin = getvalurfrom("add-money-pin")
     if(pin == "1234"){
        alert (`Add money sucsesfully from ${bankAmount}
         at ${new Date()}`);
        setblance(newBlance)

        const history = document.getElementById("history-container")
        
        const newhistory = document.createElement("div")

        newhistory.innerHTML = `
        <div class="transaction-card p-5   bg-blue-300 rounded-full">
                 Add money sucsesfully from ${bankAmount}, acc-no ${accno} at ${new Date()}
         </div>
        `;

      history.append(newhistory)
     }
     else{
        alert("Invalid pin")
        return
     }

})