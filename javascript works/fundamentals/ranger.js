var num=3;
var lower_limit=8,upper_limit=30;

for(i=1;i<=upper_limit;i++){
    let res=i**num
    if(res>=lower_limit && res<=upper_limit){
        console.log(i);
    }
}