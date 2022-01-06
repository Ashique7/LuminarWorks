// var limit=50,i=1;    //10
// while(i<limit){   //i<=10 
//     if(i%2!=0){  
//     console.log(i);
//     }
//     i++;
// }

var low_limit=10,upper_limit=20;

if(low_limit>upper_limit){
    console.log("pls enter correct value for low limit");
}
while(low_limit<=upper_limit){
    if(low_limit%2!==0){
        console.log(low_limit);
    }
    low_limit++;
}