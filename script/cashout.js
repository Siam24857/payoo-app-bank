document.getElementById("withbtn").addEventListener('click', function() {
    const cashuotnumber = getvalurfrom("cashout-number")
    if(cashuotnumber.length != 11){
        alert("Invalid number")
        return

    }
    
    const cahoutamount = getvalurfrom("cashout-Amoubnt")
     const currentblance = getblance()
     
    const newblace = currentblance - Number(cahoutamount)
    if(newblace < 0 ){
        alert("Inalid Amount");
        return;
    } 

    const pin = getvalurfrom("cashout-pin");
    if(pin === "1234"){
        alert("cashout Succsesfully");

         setblance(newblace)
         
        const history = document.getElementById("history-container")
        
        const newhistory = document.createElement("div")

        newhistory.innerHTML = `
        <div class="transaction-card p-5 bg-blue-300 rounded-full">
                 Cashout ${cahoutamount} Taka Sucses to ${cashuotnumber},  at ${new Date()}
         </div>
        `;

        history.append(newhistory)

    }
    else{
        alert("wrong pin")
        return
    }
})


 






 