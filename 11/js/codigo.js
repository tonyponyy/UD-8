var tiradas=[0,0,0,0,0,0,0,0,0,0,0,0];

function tiraDado(){
    return parseInt(Math.random() * (7 - 1) + 1);
}    

for (let i = 0; i < 3600; i++) {
    let n=tiraDado() + tiraDado();
    tiradas[n-1]++;
}

for (let index = 0; index < tiradas.length; index++) {
    console.log("el numero "+(index+1)+" ha salido "+tiradas[index]+" veces.")
    
}