function runProgram(input){
    input = input.trim().split("\n")
    let bay = input.map(e=>e.trim().split(' '))
    let [row,colum] = bay[0]
    row = +row
    colum = +colum
    // console.log(row)
    bay.shift()
    // console.log(num)
    let ray = []
    for(let i=0;i<colum;i++){
        ray[i]=bay.map(e=>e[i])
    }
    ray.forEach(e=>console.log(e.join(' ')))
  
}
if(process.env.USERNAME === "Dell"){
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`)
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