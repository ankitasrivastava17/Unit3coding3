let balance = JSON.parse(localStorage.getItem("user")) || {};
let submit = document.getElementById("submit");
submit.addEventListener("click", getBalance)

 function getBalance(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    console.log(name);
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let bal_amt = document.getElementById("amount").value;
    console.log(bal_amt);

    let total = Number(bal_amt) + Number(balance.amount);

    balance.name = name;
    balance.email = email;
    balance.address = address;
    balance.amount = total;

    localStorage.setItem("user", JSON.stringify(balance));

    balance.name = '';
    balance.email = '';
    balance.address = '';
    balance.amount = '';
    
    
 }

//  getBalance();