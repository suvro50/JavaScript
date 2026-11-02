
let weekly_study_goal=20;

let hour=0;
let subject=[];

let count=0;

function pass(){

    let subject_name=document.getElementById("subject_name").value;
    let study_hour=Number(document.getElementById("study_hour").value);

    hour+=study_hour;

    subject.push(subject_name);

    count++;
    let avg=hour/count;

    document.getElementById("total_study_hour").innerText="Total: "+hour+"hours";

    document.getElementById("avarage_study_hour").innerText="Average: "+avg+"hours";

    document.getElementById("subjects_studid").innerText="Subjects: [" +subject+ "]";

    if(count >7 && hour < 20){
        document.getElementById("progress").innerText="Increase your study time!";
    }else if(hour >=0 && hour<=5){
        document.getElementById("progress").innerText="Start studying regularly!";
    }else if(hour >=6 && hour<=12){
        document.getElementById("progress").innerText="Good progress!";
    }else if(hour >=13 && hour<=19){
        document.getElementById("progress").innerText="Almost ready!";
    }else if(hour >=20){
        document.getElementById("progress").innerText="Weekly goal reached!";
    }


}