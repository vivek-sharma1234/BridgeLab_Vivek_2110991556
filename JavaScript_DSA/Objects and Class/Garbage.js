//Garbage collection is a memory management process that automatically reclaims memory that is no longer being used by a program. In JavaScript, the engine takes care of this using algorithms to identify and clean up unused or "unreachable" objects.
let obj= {name:"Vivek"};
obj=null;// The object is now unreachable and eligible for garbage collection

//Circular Reference
let obj1 = {};
let obj2 = {};

obj1.ref = obj2;
obj2.ref = obj1;

// Both objects reference each other, but they are unreachable from the root.
// Modern garbage collectors handle this using mark-and-sweep.

//Preventing Memory Leaks
obj1.ref = null;
obj2.ref = null;
