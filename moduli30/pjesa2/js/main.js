var sleeptime;
var wakeuptime;
var dstime;
var noontime = 12;


function showCurrentTime(){

var clock = document.getElementById('clock');
var currentTime = new Data();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();


var meridian = "AM";

if(hours>=noontime){
    meridian = "PM";
}

var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

clock.innerHTML = clockTime;

//funksioni change image

var oneSecond = 1000;
setInterval(showCurrentTime,oneSecond);


function changeImage(){

    var time = newData.getHours();
    console.log(time); 

    var image = "img/ds_clock.png";
    var imageHTML = document.getElementById("timeImage");

    if(time==wakeuptime){
        image = "img/morning.gif";
        console.log("morning");

    }

    else if (time==dstime){
        image ='img/class.gif';
    }

    else if(time==sleeptime){
        image ='img/sleep.gif';
    }
imageHTML.src = Image;
console.log(imageHTML.src);

function updateClock(){

var wakeUpTimeSelector = Document.getElementById('wakeUpTimeSelector');
wakeuptime=wakeUpTimeSelector.value;

var dsTimeSelector = Document.getElementById('dsTimeSelector');
dstime=dsTimeSelector.value;

var sleepTimeSelector = Document.getElementById('sleepTimeSelector');
sleeptime=sleepTimeSelector.value;

}
var saveButton =  document.getElementById("saveButton");
		saveButton.addEventListener("click", updateClock);


}



}

