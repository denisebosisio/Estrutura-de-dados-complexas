console.log("Criando um array");
let fruta = ["Maçã", "Banana", "Acerola", "Mirtilo"];
console.log(fruta);

console.log("Adicionando um elemento");
fruta.unshift("Kiwi");
console.log(fruta);

console.log("Removendo um elemento");
fruta.splice(1,1);
console.log(fruta);

console.log("Adicionando dois elementos ao final");
fruta.push("Abacaxi", "Morango");
console.log(fruta);

console.log("Removendo o primeiro elemento");
fruta.splice(0,1);
console.log(fruta);

console.log("Organizando em ordem crescente");
let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log(numbers);