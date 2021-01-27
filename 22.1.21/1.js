function runProgram(input){
    input = input.trim().split("\n")
    let bay = input.map(e=>e.trim().split(' '))
    let num = +bay[0][2]
    bay.shift()
    // console.log(num)
    let ray = []
    for(let i=0;i<bay.length;i++){
        ray[i]=bay[i].map(Number)
    }
    console.table(ray)
    let count = 0
    let dig = 0
    let revdig = 0
    for(let i=0;i<ray.length;i++){
        let revmat = []
        revmat = ray.map(e=>e[i])
        // console.log(revmat)
        let red = ray[i].reduce((a,b)=>a+b)
        if(red===num){
            count++
        }
        red = revmat.reduce((a,b)=>a+b)
        // console.log(red)
        if(red===num){
            count++
        }
        let len = ray.length
        dig += ray[i][i]
        revdig += ray[i][(len-1)-i]
        // console.log(dig,revdig)
    }
    if(dig===num){
        count++
    }
    if(revdig===num){
        count++
    }
    console.log(count)
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`4 4 11
    1 2 1 8
    2 2 8 6
    8 1 2 5
    2 5 8 6`)
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