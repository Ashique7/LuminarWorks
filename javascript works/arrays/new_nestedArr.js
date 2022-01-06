var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//print all employye names
// for(employee of employees){
//     console.log(employee[1]);
// }

// //print developers name
// for(employee of employees){
//     if (employee[3]=="developer"){
//         console.log(employee);
//     }
// }

//employee experience
// for(employee of employees){
//     console.log((employee[5]-employee[4]));
// }



// for(employee of employees){
//     if((employee[5]-employee[4])>10){
//         console.log(employee);

//     }
// }

// var max_total=0;
// for (let employee of employees){
//     if(employee[2]>max_total){
//     max_total=employee[2]
// }
// }
// console.log(max_total);

// q6 print  second highest salary 
// q7 minimum salary
// q8 number of employees 
// q9 highest salary amoung developers
// q10 print details of employees whose name start with A
// q11 print details of employees who were working int period of 2010 to 2015


//second highest salary
// employees.sort((n1,n2)=>n2[2]-n1[2])
// console.log(employees[1][2]);

//minimum salary
// employees.sort((n1,n2)=>n2[2]-n1[2])
// console.log(employees[1][2]);
// console.log(employees[employees.length-1][2]);


//number of employees
// console.log(employees.length);


//highest salary among developers
// var developer_details=[]
// for (employee of employees){
//     if(employee[3]=="developer"){
//         developer_details.push(employee)
//     }
// }
//     developer_details.sort((d1,d2)=>d2[2]-d1[2])
//     console.log(developer_details[0][2]);
 

//name starts with A
// for(let employee of employees){
//     if(employee[1][0]=="a" || employee[1][0]=="A" ){
//         console.log(employee);
//     }
// }

 

//work from 2010-2015
for(employee of employees){
    if (employee[4]>2009 && employee[5]<2016){
        console.log(employee);
    }
}

//