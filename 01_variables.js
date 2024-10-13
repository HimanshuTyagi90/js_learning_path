var username = "Himanshu Tyagi"  // variable declared using "var" keyword have global visibility and is depricated
let userId = 32  // variable declared using "let" keyword have scope of function means are visible inside the function only in which they are declared.
let userCourse = "BCA"  // same as above
section = "A"      // don't use this approach and is same as var keyword variables.
const userUniqueCode ="BCA1A32"   // only way of declaring Constant values is using "const" keyword. These variables can't be updated.


// table is used to print an array data to console screen.
console.table([
    userId,
    userCourse,
    section,
    username,
    userUniqueCode
])

// so if we want to update the value of userUniqueCode then it will throw an error

// userUniqueCode = "BBA2C43"               // THERE WILL BE AN ERROR SAYING->  Assignment to constant variable.  // That's why line is commented.