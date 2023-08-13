function sum(num1,num2){
    return num1 + num2;

}
// Se puede poner cualquier nombre a la función callback
function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(2,2,sum));


setTimeout(function (){
    console.log('Hola JS');
},2000)


function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting,2000,'Victor')



function saludoVic(){
    console.log('Hola Vic after 2 seconds');
}

setTimeout(saludoVic,2000);
