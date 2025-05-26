// $(window).ready(function(){
//     alert('ITS WORKING!!!');
// });

// $('#header');
// $('ul li');
// $('li');
// $('.student');
// $('tr:odd');
// $('a.test:first');
// $('di:visible');

$('li').click(function(){
    alert('clicked');
});

$('#btn').click(function(params) {
    console.log($('#h1').text());
    $('#h1').text('testing text');
     $('#h1').append('extra text');
})