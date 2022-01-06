var arr=[2,3,4,5]
var element=15;
flag=0;
var low=0,upp=arr.length-1
while(low<upp){
    let cur_sum=arr[low]+arr[upp]
    if (element==cur_sum){
        console.log(`pairs (${arr[low]},${arr[upp]})`);
        low++;
        flag++;
    }
    else if(cur_sum<element){
        low++;
        
    }
    else if(cur_sum>element){
        upp--;
    }
}
if(flag==0){
    console.log("no pair");
}








// flag=0;
// for (let i of arr){
//     for (let j of arr){
//         if((i+j)==sum){
//             console.log(`pairs (${i},${j})`);
//             flag=1;
//         }
//         break;
//     }
// }