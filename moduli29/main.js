var programmingLang=['JavaScript','PHP','C#'];
console.log(programmingLang[0]);
console.log(programmingLang);
programmingLang.push('Java');
console.log(programmingLang);


programmingLang.pop();
console.log(programmingLang);

programmingLang.unshift('C#');
console.log(programmingLang);

programmingLang.shift();
console.log(programmingLang);

programmingLang.shift(0,2,'Python');
console.log(programmingLang);


console.log(Math.random()*5);
console.log(Math.floor(Math.random()*9));


var students=['elsa','haner','gerona'];

var[s1,s2,s3]=students;

console.log(s1);
console.log(s3);

var numbers = [1,2,3,4,5,6,7,8,9,10];

var [first,second,...otherNumbers] = numbers;

console.log(first);
console.log(second);
console.log(otherNumbers);

var colors = ['red','orange','blue','green','pink',...'otherColors'];

var [ r,o,...otherColors] = colors;

console.log(r);
console.log(o);
console.log(otherColors);