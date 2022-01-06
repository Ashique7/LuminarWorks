var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"ekm",temparature:28},
    {district:"ekm",temparature:31},

]
var WeatherData={}
for (let data of dataset){
    let DistName=data.district;
    let CurTemp=data.temparature;
    if(DistName in WeatherData){
        let OldTemp=WeatherData[DistName]
        if(CurTemp>OldTemp){
            WeatherData[DistName]=CurTemp;
        }

    }
    else{
        WeatherData[DistName]=CurTemp;
    }
}
console.log(WeatherData);

// var WeahterData={}
// for (data in dataset){
//     let DistName=data.district
//     let CurTemp=data.temparature
//     if(DistName in WeahterData){
//         OldTemp=WeahterData[DistName]
//         if(CurTemp>OldTemp){
//             WeahterData[DistName]=CurTemp;
//         }

//     }
//     else{
//         WeahterData[DistName]=CurTemp;
//     }
// }
// console.log(WeahterData);