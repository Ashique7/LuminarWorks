// find common common elements

var arr1=[20,21,50,60]  
var arr2=[10,11,20,21]
var p1=0,p2=0;
while(p1<arr1.length && p2<arr2.length){
    // console.log("here");
    if(arr1[p1]==arr2[p2]){
        console.log("common element ",arr1[p1]);
        p1++;
        p2++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
}