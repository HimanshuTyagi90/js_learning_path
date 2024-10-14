let age = 24 // number
let salary = 2222222222222222222222222222222n; // BigInt
let userName = "Himanshu Tyagi"  // String
let temprature = null   // null means empty or no value exist
let unknownValue; // not giving any value will return in Undefined
let isUserLoggedIn = false // boolean => true or false , every thing not 0 is true
let uniqueId = Symbol("it will be used to store the userId of user", 1011)
let serialNumber = Symbol("this will be serial number of user", 1000154989)


// using typeof to know the datatype of variable can be used as {typeof varName} or {typeof(varName)}

console.log(typeof(salary)); // BigInt
console.log(typeof(age));       // number
console.log( typeof(userName)); // string
console.log( typeof(temprature)); // object becs null results in object data type
console.log( typeof unknownValue); // undefined 
console.log( typeof isUserLoggedIn); // boolean
console.log( typeof uniqueId); // symbol , used to store a unique value with an description as a string 
console.log( typeof serialNumber); // symbol , used to store a unique value with an description as a string example :   let variableName = symbol("description", value)








// data types in javascript

                                        // Primitive Data Types

/*

1. number => stores all the integers,float till a range of 2 raised to the power of 53

example:    let score = 200

*/

/*

2. power => same as number but js automatically convert data type to BigInt 
    
    example:    
        let power = 22222222222222222222n;  // for above the range of number we need to add "n" after number the data type is "BigInt"

*/

/*
3. String => Collection of characters like Name of a user "Himanshu Tyagi"

    example :
        let userName = "Himanshu Tyagi"    // used to store data majorly

*/

/*
4. boolean => used to store two values either true or false
     
    => everything except 0 is true 
    => which means 0 is false

    => commonly used in conditional statements or user parameters. i.e. isUserLoggedIn

    example: let isUserLoggedIn = false // boolean => true or false , every thing not 0 is true
*/

/*
5. null => result in a " object " data type , it means that no value is present in there.

    example: let temprature = null   // null means empty or no value exist
*/

/* 
6. undefined => not equal to null , it means that value is not given at time of declaration of this var.
    
    example: let unknownValue; // not giving any value will return in Undefined
*/


/*
        null vs undefined :->

        => null means memory is empty
        => undefined mean memory is not empty, it is not defined by user or like a garbage value/data in variable is present.

*/

/*
7. symbol =>  symbol , used to store a unique value with an description as a string example :   let variableName = symbol("description", value)

    example:  let uniqueId = Symbol("it will be used to store the userId of user", 1011)
*/



                            // 2. Non Primitive Data Types

//   1. Arrays                            
//   2. Objects