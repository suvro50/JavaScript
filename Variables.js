// Data types : let , const , var 
// let define data can be change or update
// const datatype can not chnage after declear,const declear time must give value
// const a; -> Wrong  , const a=2; -> Right 
// var-> Global scope variable , don't use it
let fullname ='Suvrojit Bose Sarthok';
let age=21;
let price=2000.21;

 console.log(fullname,age,price);
 console.log(age);

let x=null; // declear variable : let
// isfollow = false; ❌ not recommended  , it it global
// let isfollow = false; ✅ correct
let y=undefined;
let isfollow =false;
console.log(x,y ,isfollow);

// block -> {}
{
    let x=10;
    console.log("Hello",x);  
}
// Know data type , go chrome in colsone and type: typeof fullname,age,price
let f; // typeof :undefined
console.log('Hello how are you');