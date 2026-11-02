let num = [1,2,3,4,5,6,7,8,9];
console.log(num);
console.log("Array lenght: ",num.length);

// delete , function delete array element , but not affact array length
delete(num[0]);
console.log(num);
console.log("Array lenght: ",num.length);

// Add 2 array
let num1= [1,2,3,4,5,6,7,8,9];
let num2= [11,12,13,14,15,16,17,18,19];

 //cancat add Multiple array ,but does not change existing array
 console.log("Array after marge: ");
 let newArr= num1.concat(num2);
 console.log(newArr);

let num3= [21,22,23,24,25,26,27,28,29];
let num4= [31,32,33,34,35,36,37,38,39];

console.log("Final Array: ");
let Finalarray=num1.concat(num2,num3,num4);
console.log(Finalarray);      
