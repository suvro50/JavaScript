let item = [1,2,3,4];

console.log(item[0]);
console.log(item[3]);

 // Array functions

 item.push(5);  //Adds element at the end
 console.log(item);
 item.pop();  //Removes last element
 console.log(item);

 item.unshift(10);  //Adds element at the beginning
 console.log(item);

 item.shift();  //Removes first element
 console.log(item);

 // ***V.V.I
 //splice(index to start from, number of elements to remove)
 item.splice(1,2);
 console.log(item);

  // splice(startIndex, number Of Elements To Remove, new Element)
 // NOTE: It can remove all element , except newly added element at the same splice 
  item.splice(1,0,50);
  console.log(item);

  item.push(9,0,6,12,11,15); 
  console.log(item);

  // Sort Ascending
  console.log("Sort Ascending:");
   item.sort( (a,b) => a-b ); // For Numbers
  //item.sort();           // for String
   console.log(item);

   // Sort Descending
   console.log("Sort Descending:");
   item.sort( (a,b) => b-a );
   console.log(item);
   console.log("Sort Reverse:");
  item.reverse();  // Reverse full array
  console.log(item);