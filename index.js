//1

nomes = ["Eren", "Mikasa", "Erwin", "Ymir", "Zeke"]

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

for (let i = nomes.lenght - 1; i >= 0; i--){
    console.log(nomes[1])
} 

for(let i = 0; i < nomes.lenght; i++){
    console.log(nomes[nomes.length -1 -i])
} 

//2

salarios = ["$1300", "$1500", "$1700", "$1900", "$2100", "$2500", "$2800", "$3200"]

for (let i = 0; i < salarios.length; i++){
console.log(salarios[i]);
}

//3

Mikasa= "9"
Eren = "15"

console.log(Mikasa < Eren);

//4

salarios1 = ["1300", "1500", "1700", "1900", "2100"]

for (let i = 0; i < salarios1.length; i++){
    console.log(salarios1[i])
}

for (let i =salarios1.lenght - 1; i >= 0; i--){
    console.log(salarios1[1])
} 

for(let i = 0; i < salarios1.lenght; i++){
    console.log(salarios1[salarios1.length -1 -i])
} 

//5

produtos = [1024, 2024]

lista = [produtos[0], produtos[0] * 0.05, produtos[1], produtos[1] * 0.05]
console.log(lista);

//6

x1 = Math.floor(Math.random() * 10)
y1 = Math.floor(Math.random() * 10)
z1 = Math.floor(Math.random() * 10)
matriz1 = [x1, y1, z1]
x2 = Math.floor(Math.random() * 10)
y2 = Math.floor(Math.random() * 10)
z2 = Math.floor(Math.random() * 10)
matriz2 = [x2, y2, z2]
x3 = Math.floor(Math.random() * 10)
y3 = Math.floor(Math.random() * 10)
z3 = Math.floor(Math.random() * 10)
matriz3 = [x3, y3, z3]

matrizP = [matriz1, matriz2, matriz3]
console.log(matrizP);


diagonalP1 = matrizP[0][0] *=2
diagonalP2 = matrizP[1][1] *=2
diagonalP3 = matrizP[2][2] *=2

console.log(`Os elementos da diagonal principal multiplicados ficam: ${diagonalP1}, ${diagonalP2}, ${diagonalP3}`);

//7

x1 = Math.floor(Math.random() * 10)
y1 = Math.floor(Math.random() * 10)
matriz1 = [x1, y1]

x2 = Math.floor(Math.random() * 10)
y2 = Math.floor(Math.random() * 10)
matriz2 = [x2, y2]

matrizP = [matriz1, matriz2]
console.log(matrizP);

determinante1 = matrizP[1][1] * matrizP[0][0]
determinante2 = matrizP[1][0] * matrizP[0][1]
determinante = determinante1 - determinante2
console.log(determinante);