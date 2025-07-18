 let data = JSON.parse(localStorage.getItem("cartData"));
// console.log(data);

showData(data);

async function showData(data) {
       console.log(data); 
       data.forEach((ele, index)=>{
           //console.log(ele)  
           const parent = document.getElementById("parent");
           
           const h2 = document.createElement("h2");
           h2.innerText = ele.title;

           const img = document.createElement("img");
           img.src = ele.image;
           img.style.width = "200px";
           img.style.height = "200px";


           const p1 = document.createElement("p");
           p1.innerText = ele.price;

           const p2 = document.createElement("p");
           p2.innerText = ele.category;

           const p3 = document.createElement("p");
           p3.innerText = `count:${ele.rating.rate} rate:${ele.rating.count}`;

        //    const p4 = document.createElement("p");
        //    p4.innerText = ele.description;

           const btn = document.createElement("button");
           btn.innerText = "Delete";
           btn.style.padding = "10px";
           btn.addEventListener("click",()=>{
               delteFromCart(ele);
           })

           const productDiv = document.createElement("div");
           productDiv.append(h2, img, p1, p2, p3, btn);
           productDiv.style.border = "1px solid gray";
           productDiv.style.textAlign = "center";
           

           parent.append(productDiv);
       })
}

// function deleteFromCart {
       
// }