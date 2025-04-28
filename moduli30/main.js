var x=3;


if (x>2){
    console.log("x eshte me i madhe se 2");
}

else{
    console.log("x eshte me i vogel se 2");
}



var input = document.getElementById('input_id');
var button = document.getElementById('btn_idf');
var text = document.getElementById('text_id');


button.onclick=function() {
    text.innerHTML=input.value;
}

var input1=document.querySelector('#input1_id');
var input2=document.querySelector('#input2_id');
var btn2 =document.querySelector('#btn2_id');
var answer=document.querySelector('#answer');


btn2.addEventListener("click",function(){

   answer.innerHTML= parseInt(input1.value) + parseInt(input2.value);
})