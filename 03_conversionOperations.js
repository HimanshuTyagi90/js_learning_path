let score = 68          // number variable
console.log("Value of Score is : ",score," datatype is : ",typeof(score));
let scoreString = "68" // string variable
console.log("Value of scoreString is : ",scoreString," datatype is : ",typeof(scoreString));


let scoreResult= score+scoreString
console.log("adding score and scoreString variables gives the result : ",scoreResult
    ,"and data type: ",typeof(scoreResult)); // will result in string  data type and value "6868"



//updating scoreString Value
console.log("updating scoreString Value to 32 but still with data type string ");

scoreString = "32" // value changed but still data type is string
// if we want to convert score string to number then? 
// then we will use Number() a constructor of Number wrapper class (a concept in java)

console.log("Converting scoreString to number using Number() constructor");
let scoreStringValueInNumber = Number(scoreString)
console.log("Adding Score and scoreString value after converting string to number : ");
console.log("Result is : ",(score+scoreStringValueInNumber)," and datatype : ",typeof((score+scoreStringValueInNumber)));

// what gonna happen if we convert null to number
console.log();

console.log("what gonna happen if we convert null to number? \nwill be done something like this : console.log(typeof(Number(null))); and resulting datatype will be : ",typeof(Number(null))," but the actual value will be : ",Number(null)); // zero will be actual value of null 

console.log("\nwhere as if we check data type of null normally it returns ");

console.log(typeof(null));

console.log("then what happen after coverting null to number using Number() ?\n");
console.log("its because the Number() converts the null to '0' which is a number.\n ");

console.log("Similarly if we do the same with 'undefined' like {typeof(Number(undefined))} it will give us a ",typeof(Number(undefined)));
console.log();

console.log("Converting boolean to numbers : ");
console.log("False => ",typeof false," to ",Number(false)," a ",typeof(Number(false)));
console.log("True => ",typeof true," to ",Number(true)," a ",typeof(Number(true)));
console.log();

console.log("Converting number to boolean : ");
console.log("0 => ",typeof 0," to ",Boolean(0)," a ",typeof(Boolean(0)));
console.log("1 => ",typeof 1," to ",Boolean(1)," a ",typeof(Boolean(1)));
console.log();

console.log("Converting strings to boolean : ");
console.log(" \' \' => ",typeof(' ')," to ",Boolean("")," a ",typeof(Boolean("")));
console.log(" \'Tyagi\' => ",typeof("Tyagi")," to ",Boolean("Tyagi")," a ",typeof(Boolean("Tyagi")));
console.log();
console.log("Which means an empty string is false and string having characters is true as boolean\n");

console.log("Converting number to string  : ");
console.log(10," => ",typeof(10)," to ",String(10)," a ",typeof(String(10)));
console.log();



//                                  Arithematic Operators

console.log("Arithematic Operators ==>");

let originalNumber = 101
let negativeValue = -originalNumber
console.log("Original Number is ",originalNumber," negative value is ",negativeValue);

console.log("List of operators: \n 1. Addition (+) \n 2.Subtraction (-) \n 3.Multiplication (*) \n");
console.log(" 4. Division (/) \n 5. Modulous a.k.a. Remainder (%) \n 6. Power (**) \n");

console.log("Application : ==>>\n");

console.log(2," + ",2," = ",(2+2));
console.log(2," - ",2," = ",(2-2));
console.log(2," * ",2," = ",(2*2));
console.log(2," / ",2," = ",(2/2));
console.log(2," % ",2," = ",(2%2));
console.log(2," ** ",2," = ",(2**2));


// String Concatination

console.log("\nString Concatination ==>> \n");

let str1 = "Himanshu"
let str2 = "Tyagi"


console.log(str1," + ",str2," = ",(str1+str2));
console.log((str1+str2)," - ",str2," = ",((str1+str2)-str2)); // NaN => Not a Number so subtraction can't be done
console.log(str1," * ",str2," = ",(str1*str2)); // NaN => Not a Number so multiplication can't be done
console.log(str1," / ",str2," = ",(str1/str2)); // NaN => Not a Number so multiplication can't be done

console.log("\nWe came to know no other operation can be done on Strings.\n");


console.log("what if we do complex operation or mix up the data types? \n");
console.log(10," + 10 = ",(10+"10"));
console.log("10 + ",10," = ",("10"+10));

console.log("\nif any of both operand is a string both will act like a string and will be concatinated.\n");






