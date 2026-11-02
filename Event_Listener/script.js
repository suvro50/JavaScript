function pass(){
    let input1=document.getElementById("input1").value;


    if(input1==""){
    document.getElementById("show").innerText="You don't give any input";
}else{
    document.getElementById("show").innerText=input1;
}

}