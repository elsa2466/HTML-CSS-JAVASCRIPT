// function printName() {
//     document.write("test1");
//      document.write("<br>");
//      setTimeout(function(){document.write("test2");}, 4000);
//     document.write("test3");
// }

// printName();

// var colors = ['red','green','black','blue'];

// function changeBgColor(){
//     document.querySelector('body').style.background=colors[Math.floor(Math.random()*colors.length)];

// }


// var names=['test','test1','test2','test3'];

// function changeNames(){
//     document.querySelector('p').innerHTML.names[Math.floor(Math.random()*names.length)];
// }

// setInterval(changeBgColor,1000);
// setInterval(changeNames,1000);

var circle=document.getElementById("circle")
var ShowTime=document.getElementById("time");

function ShowCircle() {

    circle.style.display='block';
    circle.style.top = Math.random()* 500+'px';
    circle.style.left = Math.random()* 900+'px';
    circle.style.backgroundColor = randomColor();
    timestart = new Date().getTime();


}
    
ShowCircle();