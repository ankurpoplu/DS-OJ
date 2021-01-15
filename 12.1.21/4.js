function runProgram(input){
    input = input.trim().split("\n")
    input.shift()
    let bay = input[0].trim().split(' ').map(Number)
    // console.log(bay)
    let sum = 0
    sum = bay.reduce((a,b)=>a+b)
    let rem = sum % 7
    // console.log(rem)
    let count = 0
    let num = []
    let index = []
    for(let i=0;i<bay.length;i++){
        if(bay[i]%7===rem){
            num.push(bay[i])
            index.push(i)
            count++
        }
    }
    if(count==0){
        console.log('-1')
    }else if(count!=0){
        let min = num[0]
        let ans = index[0]
        for(let i=1;i<num.length;i++){
            if(num[i]<min){
                min = num[i]
                ans = index[[i]]
            }
        }
        console.log(ans)
    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`5
    14 7 8 2 4`)
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