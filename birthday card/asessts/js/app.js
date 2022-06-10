var text= document.querySelector("#name");
var date= document.querySelector("#date");
var newDate= new Date (date.value);
var DOB = new Date (date);

function clickHere(){
     
    document.getElementById("name").innerHTML= "HEY"+ text;
    document.getElementById("date").innerHTML= "your date of birth"+ newDate.value;
    console.log(DOB);
}