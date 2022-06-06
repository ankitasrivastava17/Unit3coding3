let purchase = JSON.parse(localStorage.getItem('purchase')) || [];
appendData(purchase);
let data = JSON.parse(localStorage.getItem('user')) || {};
console.log("data : ",data);
 let balance = document.getElementById("balance");
balance.innerHTML = data.amount;


function appendData(data){
    data.map(function(elem){
        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src= elem.image;

        let name = document.createElement("p");
        name.innerText= elem.name;

        let price = document.createElement("p");
        price.innerText= elem.price;

        box.append(image,name,price);
        document.getElementById("purchased_vouchers").append(box);
    }  
    )}; 