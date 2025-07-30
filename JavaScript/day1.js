//variables
let a= 10;
console.log(a);
//array
let b=[10,5,1996,"Rockey"];
console.log(b[2]);
console.log(b[22]);
//array mutable
let c=[10,5,1996,"Rockey"];
c[2]=2000;
c[4]=5225;
console.log(c);
c[16]=1020;
console.log(c);
console.log(c.length);
//object key value pair
// let obj= {Hyundai: "Kia"}
// console.log(obj);
// obj["Hyundai"] = "Hyundai Creata";
// console.log(obj);
// obj["Kia"] = "Kia Seltos";
// console.log(obj);
// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// let obj = obj1;
let obj1 = {Tamil: "98", English:"92", Maths: "99", Science: "94", Social: "90"};
console.log(obj1);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
Object.seal(obj1);
console.log(obj1);
Object.freeze(obj1);
console.log(obj1);






