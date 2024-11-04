let x = 4;

let y = 6;

let z = x + y;

console.log(`Z = ${z}   , should print 10`);

console.log(`Z = ${z!=12} , should print true`);

console.log(`Z = ${(z>12)}, should print false`);

let a = (12 + 23)*2

console.log(`A: ${a}, should print 70`);

a +=10;

console.log(`A: ${a}, should print 80`);

a /=10;

console.log(`A: ${a}, should print 8`);

a -=2;

console.log(`A: ${a}, should print 6`);

a *=4;

console.log(`A: ${a}, should print 24`);

a %=10;

console.log(`A: ${a}, should print 4`);

a **=2;

console.log(`A: ${a}, should print 16`);



console.log(`A: ${a++}, should print 16`);



console.log(`A: ${a}, should print 17`);



console.log(`A: ${a++}, should print 17`);



console.log(`A: ${a--}, should print 18`);



console.log(`A: ${a--}, should print 17`);


let b = 5;



b = b**4; //b is equal to b to the power of 4, i.e. 3**3 = 27



console.log(`B: ${b}, should print 625`);



b -=620;



console.log(`B: ${b}, should print 5`);


c = Math.pow(b, 4);


console.log(`C: ${c}, should print 625`);


c = Math.pow(b, 4);


console.log(`C: ${c}, should print 625`);


const FullName = {fname:"John",lname:"Doe"}


console.log(`Full name: '${FullName.fname} ${FullName.lname}', should print 'John Doe'`);


const flowers = ["Rose", "Marygold", "Tulip", "Sunflower"];


console.log(`'Flowers, ${flowers}',  should print 'Rose,Marygold,Tulip,Sunflower'`);


const bDay = new Date("1-1-1970");


console.log(`Birthday, '${bDay}',  should print '1-1-1970'`);


const concateNumString = 4 + 16 + "India";


console.log(`Value=, '${concateNumString}', should print 20India'`);


const concateNumString2 = "India" + 4 + 16;


console.log(`Value=, '${concateNumString2}', should print India416'`);


let d;


console.log(`D=, '${d}', should print undefined'`);


d = 123;


console.log(`D=, '${d}', should print 123'`);


d = 123.23;


console.log(`D=, '${d}', should print 123.23'`);


e = 123;
f = 123.23;


console.log(`E - F = , '${e-f}', should print .23'`);


f = 123e3;


console.log(`F=, '${f}', should print 123000'`);