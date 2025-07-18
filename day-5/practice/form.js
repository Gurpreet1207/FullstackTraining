let form = document.getElementById("form");
form.addEventListener("submit",(event)=>{
 event.preventDefault();
let username = document.getElementById("Username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmpassword = document.getElementById("confirmpassword").value;

if(password !== confirmpassword){
    return alert("password do not match");   
}
if(password.length<6){
    return alert("password must be 6 character");
}

let obj = {
    username,email,password,confirmpassword,
};
let userData = document.getElementById("userData");
userData.style.width="30%"
userData.style.border="1 px solid gray"
userData.style.margin="auto"
userData.style.padding="10px"
userData.style.borderRadius="8px"
userData.style.textAlign="center"
userData.style.marginTop="20px"

let h2 = document.createElement("h2");
h2.innerText=obj.username;
let p1 = document.createElement("p");
p1.innerText=obj.email;
let p2 = document.createElement("p");
p2.innerText=obj.password;
let p3 = document.createElement("p");
p3.innerText=obj.confirmpassword;
userData.append(h2,p1,p2,p3);
console.log(obj);
});