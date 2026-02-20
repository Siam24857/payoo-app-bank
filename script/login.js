 document.getElementById('loginbtn').addEventListener
 ('click', function (){
    const numberinput = document.getElementById('input-number')
    const contactnumberr = numberinput.value
    console.log(contactnumberr)


    const pininput = document.getElementById('input-pin')
    const pin = pininput.value
    console.log(pin)

    if(contactnumberr =="01841216867" && pin == "1234"){
        alert("Login Sucsese")
        window.location.assign("/home.html")
          
    }
    else{
        alert("Login Faild")
    }
 })