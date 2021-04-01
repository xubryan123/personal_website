let course1 = {
    code: 'ACIT 1620',
    name: 'Web Technologies'
};

let course2 = {
    code: 'ACIT 1420',
    name: 'Introduction to Systems Administration'
};

let course3 = {
    code: 'ACIT 1630',
    name: 'Database System'
};

let courseList = [course1, course2, course3];
check_code = window.prompt('What course would you like to check for?')
while(isNaN(check_code) || check_code.length != 4){
    check_code = window.prompt('What course would you like to check for?')
}
for(let course of courseList){
    if(course.code.includes(check_code)){
        console.log('Yes I am taking the course: ' + course.code)
    }
    else{
        let course4 = {
            code: 'ACIT ' + check_code,
            name: null
        }
        courseList.push(course4)
    }
}

