const students = [
    
    {name:"Vivek",grade: 85},
    {name:"Kubar",grade: 81},
    {name:"Shubham",grade: 74},
    {name:"ROHAN",grade: 78},
    {name:"Rohit",grade: 84},

];

//passing grade thershold

const passingGrade=80;


function classifyMarks(students,passingGrade){
    const passStudents=students.filter(student => student.grade >= passingGrade);
    const failStudents=students.filter(student => student.grade < passingGrade);
    
    
    console.log("Passing Students:");
    passStudents.forEach(student =>console.log(`- ${student.name}: ${student.grade}`));
    
    console.log("failed Students:");
    failStudents.forEach(student =>console.log(`- ${student.name}: ${student.grade}`));
    
    console.log(`Number of passing Students: ${passStudents.length}`);
    
}

//call the function
classifyMarks(students,passingGrade);