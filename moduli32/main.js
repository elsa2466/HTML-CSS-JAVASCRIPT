var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('textst_id');

button.onclick = function() {
    text.innerHTML = input.value;
}

// var text = "The best school in the world is Digital School ";
// var result = text.search("Digital School");
// document.getElementById('result').innerHTML = result;

// var text = "The best school in the world is Digital School ";
// var result = text.replace(/Digital School/,"Another School");
// document.getElementById('result1').innerHTML = result;

// var text = "abcqddhef";
// var regex = new RegExp('abc');
// document.getElementById("result2").innerHTML = regex.test(text);

// var text="My school is the best school";
// var regex=/school/g;
// document.getElementById("result3").innerHTML = text.match(text);

// var text="My school is the best school 22";
// var regex=/i/g;
// document.getElementById("result4").innerHTML = text.match(text);

var text="My school is the best school 22";
var regex=/[ade]/g;
document.getElementById("result5").innerHTML = text.match(text);

var text="My school is the best school 22";
var regex=/[1-9]/g;
document.getElementById("result6").innerHTML = text.match(text);