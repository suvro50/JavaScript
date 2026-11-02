function showName(){
    let input=document.getElementById("input").value;

    if(input==""){
        document.getElementById("result").innerText="YOU DON'T GIVE ANY INPUT!";
    }else{
        document.getElementById("result").innerText= input;
        // show alert top of the screen
        alert(input);
        // Take confirm message from user
        confirm("Do you want to proceed");
    }
}