type Employee = {
    name: string,
    salary: number,
    joinedDate: Date
}


function getSalary(employee: Employee) {
    return employee.salary
}

function getEmployee(employee: Employee): Employee {
    return employee
}


function calculateExperience(employee: Employee) {
    const msInYear = 1000 * 60 * 60 * 24 * 365.25;
    return (new Date().getTime() - employee.joinedDate.getTime()) / msInYear;
}

let user1 = { name: "nayeem", isPaid: true, email: "asdsa@oil.com" }
calculateExperience(user1)

calculateExperience({ name: "John", salary: 123455, joinedDate: new Date() })
