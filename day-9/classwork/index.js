const myPromise = async()=>{
     const response = await fetch("https://fakestoreapi.com/products")
         
     const res = await response.json();
     const data = res;
    //  console.log(data)
     showData(res)

//      console.log(res)//we can write res.products
}
myPromise();

async function showData(data){
       console.log(data); 
       data.forEach((ele,index)=>{
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
           btn.innerText = "Add to Cart";
           btn.style.padding = "10px";
           btn.addEventListener("click",()=>{
               addToCart(ele);
           })

           const productDiv = document.createElement("div");
           productDiv.append(h2, img, p1, p2, p3, btn);
           productDiv.style.border = "1px solid gray";
           productDiv.style.textAlign = "center";
           

           parent.append(productDiv);
       })
}

function addToCart(ele) {
    // console.log("ele");
    let cartArray = JSON.parse(localStorage.getItem("cartData")) || [];
    cartArray.push(ele)
    localStorage.setItem("cartData", JSON.stringify(cartArray))

    }
    
function cartPage() {
    window.location.href = "cart.html";
}