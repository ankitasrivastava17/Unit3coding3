
let balance = JSON.parse(localStorage.getItem("user")) || {};
console.log("balance : ",balance);
let wallet = document.getElementById("wallet_balance");
wallet.innerHTML = balance.amount;
console.log(balance.amount);
let bal_amt = balance.amount;
// console.log(bal_amt);

// let walletAmount
let purchaseData=JSON.parse(localStorage.getItem("purchase"))||[];

    async function addData(){
        try{
        let response= await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
        let data = await response.json();
         console.log(data[0].vouchers);
         appendData(data[0].vouchers);


    }
    catch(err){
        console.log("err:",err)
    }

    }
    addData();

    function appendData(data){
      data.map(function(elem){
          let box = document.createElement("div");

          let image = document.createElement("img");
          image.src= elem.image;

          let name = document.createElement("p");
          name.innerText= elem.name;

          let price = document.createElement("p");
          price.innerText= elem.price;
          
          let walletAmount = Number(elem.price); 
        //   console.log(walletAmount);
          
          let buyBtn=document.createElement("button");
          buyBtn.setAttribute("id","buy_voucher");
          buyBtn.innerText="Buy";
          buyBtn.addEventListener("click",function(){
              if(+walletAmount<=0)
              {
                  alert("Sorry! insufficient balance");

              }
              else{
                // let amount = document.getElementById("wallet_balance");
                //   
                let total = 0;
                total = Number(wallet) - Number(elem.price);
                // balance.amount = total;
                //  console.log("bal_amt :",bal_amt)

                  purchaseData.push(elem);
                  localStorage.setItem("purchase",JSON.stringify(purchaseData));
                //   localStorage.setItem("user",JSON.stringify(balance));

                //   wallet.innerHTML = balance.amount;/


                  
                  alert("Hurray! purchase successful");

              }
              window.location.reload()
          })
          

          box.append(image,name,price,buyBtn);
          box.setAttribute("class", "voucher");
          box.style.marginBottom = "30px";

          document.getElementById("voucher_list").append(box);
      })
    }