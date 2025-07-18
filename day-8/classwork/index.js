//HOF
//let arr = [1,2,3,4,5,6,7,8];//map will return array with index 
 
//let out = arr.map((index,ele)=>{
   // return ele**2

//}).filter((index,ele)=>{
  //return ele%2==0
//}).map((index,ele)=>{
  //  return ele*0.5
//})
//console.log(out)

// arr.forEach((index,ele)=>{
    //console.log(index,ele)

//});// forEach return give undefined
//analmous function is also called call out function
// we can't write foreach function as map function

//let filterOut = arr.filter((ele,index)=>{
   // return ele%2==0;
//})
//console.log(filterOut);
// = assignment operator that assign value
//== comparison only value
// ===comparison value with data type
//let filterOut = arr.filter((ele,index)=>{
 //   return index%2==1; // for even 0 for odd 1
//});
//console.log(filterOut);

//let reduceOut= arr.reduce((acc,current)=>{ // reduce return single value
    //return acc+current
//},10);
//console.log(reduceOut);//if acc is given that it add the current in acc otherwise 1 ele is acc and next is current
let arr = [ 2,4,6,8,10,12,14,16,18,20];
//let out = arr.map((index,ele)=>{
  //return ele*3
//});
//console.log(out)
//arr.forEach((index,ele)=>{
  //  console.log(index,ele)
//});
//let filterOut = arr.filter((ele,index)=>{
  //  return index%2==0;
//});
//console.log(filterOut)
let reduceOut= arr.reduce((acc,curr)=>{
    return acc+curr
});
console.log(reduceOut);
