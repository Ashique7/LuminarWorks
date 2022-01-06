//class=>prototype,
//object=>realworld entity,
//reference

//key:value

//create employee with object with props eid,name , salary and desig
var employee={
    eid:1000,
    ename:"tom",
    salary:25000,
    desig:"developer",
    exp:1

}

// console.log(employee.desig);
// employee.experience=2
// console.log(employee);

if ("exp" in employee){
    employee.exp+=1;
}
else{
    employee.exp=1;
}
console.log(employee);