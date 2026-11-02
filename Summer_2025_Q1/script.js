
const daily_goal=2000;
  let add=0;
 let entry=0;
function pass(){


    let input1=Number(document.getElementById("input").value);

    add+=input1;
    entry+=1;


    document.getElementById("show1").innerText="total calories consumed so far:"+add;

    if(entry > 10 && add < daily_goal){
    document.getElementById("show2").innerText="Be cautious of frequent snacking!";
   }else if(add>=0 && add<=800){
    document.getElementById("show2").innerText="You're off to a healthy start!";
   }else if(add>=801 && add<=1600){
    document.getElementById("show2").innerText="Good progress, keep it balanced!";
   }else if(add>=1601 && add<=1999){
    document.getElementById("show2").innerText="Almost at your limit!";
   }else if(add>=2000){
    document.getElementById("show2").innerText="Goal reached! Stay mindful!";
   }


 document.getElementById("show3").innerText="Total Entry:"+entry;


}