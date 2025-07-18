let arr = [1,2,3,4,5,"preet",true,false,null,undefined]
console.log(arr[5]);
console.log(arr.length);

//inserting element
arr.push("gopi");
console.log(arr);
arr.pop();
//console.log(arr);
//object
let obj = {
    firstname:"naman",
    lastname:"singh",
    batch:"FS",
    age:19,
    subjects:["HTML","CSS","JS","React"],
college : "RB",
myfunction:function(){
    let a = 10;
    let b = 20;
    return a+b
    console.log(this.firstname, this.lastname)
}
}
console.log(obj.myfunction())
console.log(obj.batch);
let profile = {
    username: "GurpreetKaur",
    isfollow: true,
    followers: 1521,
    following: 5,
};
console.log(profile.username);
//conditions
let a = 21;
let b = 31;
if(a,b){
    console.log("a is less than b")
}
else if(a==b){
   console.log("a is equal to b")
}
else{
    console.log("a is not less than b")
}
//loops
//for, while, forof, forin
//for loop
//let str="prbir"
//for(let i=0; i<str.length; i=i+1){
  // console.log(str[i])
//}
//let i = 1;
//while(i<10){
  //  console.log(i);
   // i=i=1
//}
//let str="Parmeet"
//let n =str.length;
//for(let i =n-1; i>=0; i=i-0.5){
  //  console.log(str[i]);
//}
//let arr = [1,2,3,4,5,6,7,8];
//for(let sum of arr){
  //  console.log(num)
//}
for(let key in obj){
 if(typeof(obj[key])=="string"){
    console.log(obj[key]);
 }
}
//let arr =[1,2,3,4,5,6,7,8,9]
//for(let i=0; i<arr.length; i++){
  //  if(arr[i]%2==0){
    //    console.log('element ${arr[i]} is Even')
       
    //}
//}
