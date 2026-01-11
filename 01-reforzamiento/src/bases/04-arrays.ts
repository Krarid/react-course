const miArray1: number[] = [1, 2, 3, 4, 5];
const miArray2 = [...miArray1];

miArray2[5] = 6;
miArray2.push(7);

console.log({miArray1, miArray2});