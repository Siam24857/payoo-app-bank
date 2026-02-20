document.getElementById("pay-money-btn").addEventListener(
     
    "click", function() {
      const payBill = getvalurfrom("addpay")

       if(payBill === "Select a pay"){
        alert('Please select a pay')
        return
       }

       const pybiller= getvalurfrom('biller-number')
       if(pybiller.length != 11){
        alert("Wrong number");
       }
       
     const amountpay = getvalurfrom("pay-money-Amoubnt")

        const payamount = getblance(amountpay)

        const totalbill = payamount -  Number(amountpay) 
        if(totalbill < 0){
            alert("Your Blance have not for Avalable")
            return
        }

         const pinnumber= getvalurfrom("pin-number")
         if(pinnumber == "1234" ){
            alert("Pay Bill Sucsesefull")
            setblance(totalbill)
            

             const history = document.getElementById("history-container")
        
        const newhistory = document.createElement("div")

        newhistory.innerHTML = `
        <div class="transaction-card p-5 bg-blue-300 rounded-full mb-2">
                 Pay Bill ${amountpay} Taka Sucses to ${payBill},  at ${new Date()}
         </div>
        `;

        history.append(newhistory)


         }
         else{
            alert("Wrong pin Submit")
            return
         }
         
             

       
    }
)


 





