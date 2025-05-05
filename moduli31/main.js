for(var  i=0;  i<5;  i++){

    console.log("value of i is:"+i);
}

var person = {firstname:"Besarta", lastname:"Pacolli",email:"test@gmail.com"};

var text='';

var z;

for(z in person){

    text += person[z];

}

console.log(text);

var names = ['benjamin','elsa','mal'];

var x;

for(x of names);
document.write(x + "<br>");



let b =0;

do{
    b += 1;
    console.log(i);
}

while(b<5);



// var renditur = {"html","css","js","..."};

// var text='';

// var renditur;

// for(v in renditur){

//     text += renditur[v];

// }

// console.log(text);

var students = ["klea","amra","ana"];

for(i=0;i<students.length;i++){
    document.write(students[i]+'<br>');
}


var name_input=document.getElementById("name_input");
var btnadd = document.getElementById("btnadd");
var btnshow = document.getElementById("btnshow");

btnadd.onclick=function() {
    student.push(name_input.value);
}

btnshow.onclick=function(){
   for(i=0; i<students.length; i++){
    document.write(students[i] + '<br>');
   }
}