
//Methods of Promises:
//promise.all()

// const promise1= promise.resolve(10);
// const promise2= promise.resolve(20);
// const promise3= promise.resolve(30);

// Promise.all([promise1,promise2,promise3])
// .then(result=>console.log(results));
// .catch(error=>console.log(error);


//Promise.allSettled
//promise.race()
//promise.any()

//2.Error Handling With Promsies
//Error in promise are caught using the .catch() methods or the try- catch block with the async/await

//Using Catch
// const Promise= new Promise((resolve,reject)=>{
//     reject("Something is wrong");
// })
// promise1
// .then(result=>console.log(result));
// .catch(error=>console.log(error));


//using finally
//finally() is executed after the promise is settled, regardless of whether it was resolved or rejected.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//custom Error :

//use to create a new type  of error by extending the error class

// class ValidationError extends Error {
//     constructor(message) {
//         super(message); // Call the parent class constructor
//         this.name = "ValidationError"; // Set the error name
//     }
// }

// try {
//     throw new ValidationError("Invalid input provided!");
// } catch (error) {
//     console.log(error.name);    // "ValidationError"
//     console.log(error.message); // "Invalid input provided!"
//     console.log(error.stack);   // Stack trace
// }


///////////////Adding Custom Proterties//////////////////////
// class ValidationError extends Error {
//     constructor(message, field) {
//         super(message);
//         this.name = "ValidationError";
//         this.field = field; // Custom property
//     }
// }

// try {
//     throw new ValidationError("Invalid email format!", "email");
// } catch (error) {
//     console.log(error.name);    // "ValidationError"
//     console.log(error.message); // "Invalid email format!"
//     console.log(error.field);   // "email"
//     console.log(error.stack);   // Stack trace
// }

////////////////////chaining Error/////////////////////////
//custom erro can also include a reference to another error for better debugging


///////////////////Overriding toString//////////////////////
