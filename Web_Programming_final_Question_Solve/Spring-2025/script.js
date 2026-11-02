let count=0;
function checkStrength(){
    count++;
    let score= 0;

    let password= document.getElementById("password").value;
    document.getElementById("label").innerText = password;

    if(password.length < 6){
        document.getElementById("label").innerText = "Min 6 characters needed!";
    }else{
        score= Math.floor( ( (password.length - 6) / 2 ) )* 10;
         document.getElementById("label").innerText = score;

        //  Add points
          if(/[A-Z]/.text(password)) score +=15;
          if(/[a-z]/.text(password))score +=15;
          if(/[0-9]/.text(password))score +=20;
          if(/[!@#$%^&*<>()_-]/.text(password))score +=15;

          //   Add comment
          if(sroce < 31){
            document.getElementById("label").innerText="Very Week";
          }else if(sroce < 51){
            document.getElementById("label").innerText="Week";
          }else if(sroce < 71){
            document.getElementyId("label").innerText="Medium";
          }else if(sroce < 81){
            document.getElementById("label").innerText="Strong";
          }else if(sroce < 91){
            document.getElementById("label").innerText="Strong";
          }else if(sroce < 101){
            document.getElementById("label").innerText="Very Strong";
          }else{
            document.getElementById("label").innerText="Perfect";
          }
         

          if(count < 8 && sroce < 71){
            document.getElementById("label").innerText= "Need Practice";
          }
    }

}