function runProgram(input){
    input = input.trim().split("\n")
    let arr1 = input[0].trim().split(' ').map(Number)
    let arr2 = input[1].trim().split(' ').map(Number)
    let sum1 = arr1.reduce((a,b)=>a+b)
    let sum2 = arr2.reduce((a,b)=>a+b)
    if(sum1>sum2){
        console.log('First')
    }else if(sum1===sum2&&arr1[2]>arr2[2]){
        console.log('First')
    }else if(sum1===sum2&&arr1[2]===arr2[2]&&arr1[0]>arr2[0]){
        console.log('First')
    }else{
        console.log('Second')
    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`120 90 70
    90 80 110`)
}
else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/,"")
    runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/,"")
        runProgram(read);
        process.exit(0);
    }); 
}