var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernakulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukki",1000,50,9500,9,6]   
]

// q1 higest test + ve case district

// q2 district with higest 1 dose vaccination rate

// q3 district with lowest death cases

// q4 sort district with +ve cases

// q5 sort the districts based on 1st dose

// q6 is there any states with +ve cases > 60000

// q7 print trissur details

// q8 total nu,ber of +ve cases

// q9 total number of cured cases

// q10 cured numbers of iduky

// q11 total number of death cases

// var highpos_rate=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(highpos_rate);

// var firDose=coivd_data.reduce((fd1,fd2)=>fd1[5]>fd2[5]?fd1:fd2)[1]
// console.log(firDose);

// var lowDeath=coivd_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)[1]
// console.log(lowDeath);

// var SortPositive=coivd_data.sort((d1,d2)=>d2[2]-d1[2])
// console.log(SortPositive);

// var SortFirstdose=coivd_data.sort((d1,d2)=>d2[5]-d1[5])
// console.log(SortFirstdose);
// var districts=SortFirstdose.map(d=>d[1])
// console.log(districts);

// var Positive60k=coivd_data.some(d=>d[2]>60000)
// console.log(Positive60k);

// var ThrissurDetails=coivd_data.filter(dist=>dist[1]=="thrissur")
// console.log(ThrissurDetails);

// var TotalPosCases=coivd_data.map(d=>d[2]);
// console.log(TotalPosCases);
// var finalResult=TotalPosCases.reduce((d1,d2)=>d1+d2);
// console.log(finalResult);

// var TotalcurCases=coivd_data.map(d=>d[4]);
// console.log(TotalcurCases);
// var finalResult=TotalcurCases.reduce((d1,d2)=>d1+d2);
// console.log(finalResult);

// var Curredidukki=coivd_data.find(d=>d[1]=="idukki")
// console.log(Curredidukki);

// var TotalDeath=coivd_data.map(d=>d[3]).reduce((d1,d2)=>d1+d2);
// console.log(TotalDeath);

