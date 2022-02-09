enum School {
    Harvard = "HARVARD" ,
    Stanford = 'STANFORD' , 
    Berkley = 'BERKLEY' , 
    Oxford = 'OXFORD'
}

const fun = (school: School) => {
    console.log(school);
}

// fun(School.Berkley);

console.log(School[2]);

