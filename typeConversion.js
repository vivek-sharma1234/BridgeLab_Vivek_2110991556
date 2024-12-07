//1.Implicit type Conversion
console.log('5' +3);
console.log('5'-3);

//2.Use String function:
console.log(String(123));
console.log(String(true));

//3.1.Automatic string conversion
console.log(123 +'');

//3.2. Using String constructor:
let str= String(123);
let str2= String(true);
console.log(str);
console.log(str2);


//4.numnber conversion
console.log(Number("123"));//123
console.log(Number("abc"));//show an Error because NaN Not a Number
console.log(Number(true));//1

//5.parse strings into number
console.log(parseInt("123"));
console.log(parseFloat("123.05"));

//6.Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Hello"));

//7.1.Date to Numbers
const date = new Date();
console.log(+date);//numeric timeStamp

//7.2.convert dates to string:
console.log(String(date));//Date as a Sting




















