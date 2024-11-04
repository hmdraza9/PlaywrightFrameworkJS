//https://www.w3schools.com/js/js_let.asp

const name1 = "Nicks";

console.log(name1);

// name1 = "newNicks";//error
// console.log(name1);

var varName = "NewNicks";

console.log(`Var Name: ${varName}`);

varName = "Reassigned_NewNicks";

console.log(`Reassigned Var Name: ${varName}`);

let letName = "LET_NewNicks";

console.log(`LET Name: ${letName}`);

letName = "Reassigned_LET_NewNicks";

console.log(`Reassigned Var Name: ${letName}`);


function getFirstNull() {
    for(let i=0;i<arguments.length;i++){

        if(arguments[i]==null){
            return arguments[i];
        }

    }
}

console.log(getFirstNull(null, undefined, "First",1, 2, 3, null));

m = 990;  //You can use the variable before it is declared
console.log(`Value of m: ${m}`);
var m;