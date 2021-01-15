function runProgram(input){
    input = input.trim().split("\n")
    let num = Number(input[0])
    input.shift()
    console.log(num)
    let bay = input.map(e=>+e)
    // console.log(bay)
    let a = ''
    for(let i=0;i<num;i++){
        for(let j=1;j<=bay[i];j++){
            if(j%3==0){
                a = 'Fizz'
            }if(j%5==0){
                a = a + 'Buzz'
            }if(a === ''){
                console.log(j)
            }else if(a!==''){
                console.log(a)
            }
            a = ''
        }
    }
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`10
    5
    3
    6
    5
    3
    9
    3
    10
    7
    10`)
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