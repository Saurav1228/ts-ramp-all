interface Student {
    // _random: 'randomhs',
    id: number;
}

const printStudentId = (student: Student) => {
    console.log(student.id);
}

let student = {  id : 200}
printStudentId(student);



//Nominal typing and Structural typing