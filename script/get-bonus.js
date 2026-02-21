document.getElementById("bonus-btn").addEventListener(
    'click', function(){
        const bonuscode =  getvalurfrom("Bonus-Coupon")
        if(bonuscode == "Siam1597"){
            alert("Your code is Correct Bonus Sucecfull you got $5000")
            
            const blcnehome = getblance(bonuscode)
            const totalpay = blcnehome + Number(5000)
            setblance(totalpay)

              const history = document.getElementById("history-container")
        
        const newhistory = document.createElement("div")

        newhistory.innerHTML = `
        <div class="transaction-card p-5 bg-blue-300 rounded-full mb-2">
                 Get Bonus $5000 Taka Sucses to ${totalpay},  at ${new Date()}
         </div>
        `;

        history.append(newhistory)
        }
        else{
            alert("Your Cupon is Wrong")
        }
         
         
    }
)
