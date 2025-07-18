//sync 
//console.log("one");
//console.log("two");
//console.log("three");
//async
//console.log("two");
//console.log("one");
//function hello(){
  //  console.log("hello");
//}
//setTimeout(hello,5000);
//console.log("three");
//callback
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}
calculator(1,2,sum);
