//*
//***
//*****
let rows=3;
let result = '';
let cols = 1;
for (let i=1; i<=rows; i++){
for ( let j = 1; j<= cols; j++){
    result +='*';
}
result += '\n';
cols +=2; 
}
console.log(result);
