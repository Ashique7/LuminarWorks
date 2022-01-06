var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    
]

//costly mobile
// mobiles.sort((m1,m2)=>m2[3]-m1[3])
// console.log(mobiles[0]);

//snapdragon processor mobiles
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon"){
//         console.log(mobile[2]);
//     }
// }

//costly mobile with procesor snapdragon with 5g band
// var new_arr=[]
// for(let mobile of mobiles){
//     if(mobile[4]=="snapdragon" && mobile[6]=="5G" ){
//         new_arr.push(mobile)
//     }
// }
// new_arr.sort((m1,m2)=>m2[3]-m1[3])
// console.log(new_arr[0][2]);


//any mobile under 10k
//print samsung a51 mobile detail

//any mobile under 10k
// flag=0;
// for(mob of mobiles){
//     if(mob[3]<=10000){
//         flag=1
//     }
//     }
// if(flag==1){
//     console.log("mobile under 10k available");
// }
// else{
//     console.log("mobile not available");
// }

//print samsung a51 mobile detail
// for(mob of mobiles){
//     if(mob[2]="samsung A51"){
//     }
// }
// console.log(mob);


// var mobile_name=mobiles.map(mob=>mob[2]);
// console.log(mobile_name);

// var mobile_prices=mobiles.map(mob=>mob[3])
// console.log(mobile_prices);

//comapny name is samsung
// var mob_comp=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
// console.log(mob_comp);


//print mobilees inder 25000
// var mob_price=mobiles.filter(mob=>mob[3]<=25000).map(mob=>mob[1])
// console.log(mob_price);

//mob price between 25k-30k
// var mob_price =mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000);
// console.log(mob_price);

//list all 5g mobiles names
//list all 5g mobiles available under 25000
//list all samsung mobile names

//list all 5g mobiles names
// var mobile=mobiles.filter(mob=>mob[6]=="5G").map(mob=>mob[2])
// console.log(mobile);

//list all 5g mobiles available under 25000
// var mob5g=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<=25000).map(mob=>mob[2]);
// console.log(mob5g);

//list all samsung mobile names whose band is 4g and display is AMOLED
// var samsungMoblies=mobiles.filter(mob=>mob[1]=="samsung" && mob[5]=="AMOLED" && mob[6]=="4g").map(mob=>mob[2])
// console.log(samsungMoblies);

// var max_price=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2);
// console.log(max_price);

//low_cost mobile
// var low_cost=mobiles.reduceRight((m1,m2)=>m1[3]<m2[3]?m1:m2);
// console.log(low_cost);


//some
// var isAval=mobiles.some(mob=>mob[3]==10000)
// console.log(isAval);
// var isAval=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)
// console.log(isAval);

//find
// var nameById=mobiles.find(mob=>mob[0]==1000)[2]
// console.log(nameById);