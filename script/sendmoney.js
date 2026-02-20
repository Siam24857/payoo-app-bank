document.getElementById("send-btn").addEventListener('click', function() {
    const cashuotnumber = getvalurfrom("send-number")
    if(cashuotnumber.length != 11){
        alert("Invalid number")
        return

    }
    
    const cahoutamount = getvalurfrom("send-Amoubnt")
     const currentblance = getblance()
     
    const newblace = currentblance - Number(cahoutamount)
    if(newblace < 0 ){
        alert("Inalid Amount");
        return;
    } 

    const pin = getvalurfrom("send-pin");
    if(pin === "1234"){
        alert("Send Money Succsesfully");

         setblance(newblace)
         
        const history = document.getElementById("history-container")
        
        const newhistory = document.createElement("div")

        newhistory.innerHTML = `
        <div class="transaction-card p-5 bg-blue-300 rounded-full mb-5">
                 Send Money ${cahoutamount} Taka Sucses to ${cashuotnumber},  at ${new Date()}
         </div>
        `;

        history.append(newhistory)

    }
    else{
        alert("wrong pin")
        return
    }
})


 



