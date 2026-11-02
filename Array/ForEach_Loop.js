let num = [1,2,3,4,5,6,7];

// For loop
for(let i=0; i<num.length; i++){
    console.log(num[i]*num[i]);
}

 console.log("For each loop: ");
// forEach  loop
num.forEach ( (element) => {
    console.log(element*element);
} )