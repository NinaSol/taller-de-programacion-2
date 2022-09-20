const fs = require("fs");

const dir = "/home/nmarotta/Escritorio/TP1/tp1.txt";

//leerArchivoComoString
fs.readFile(dir, "utf8", (err, data) => {
  if (err) throw new Error(err.message);
  console.log("//leerArchivoComoString//", data.toString());
});

//escribirTextoEnArchivo
const escribirTextoEnArchivo = (dir, texto, flag) => {
  return fs.readFile(dir, "utf8", (err) => {
    if (err) {
        
      if (flag) {
        fs.writeFile(dir, texto, (err) => {
          if (err) throw new Error(err.message);
          console.log(
            "//escribirTextoEnArchivo//",
            "Se modifico el archivo",
            dir
          );
        });
      } else {
        throw new Error(err.message);
      }
    }
  });
};
escribirTextoEnArchivo(dir,"Hola!!",true);
//transformarStringEnArrayDeNumeros
const transformarStringEnArrayDeNumeros = (stringNumeros, separador) => {
  console.log("//transformarStringEnArrayDeNumeros//");
  let arrNums = stringNumeros.split(separador);
  arrNums = arrNums.filter((num) => !/[a-zA-Z]/.test(num));
  console.log(arrNums);
};
transformarStringEnArrayDeNumeros("123 | 456 | 789 | 1bc | 10", "|");

//transformarArrayDeNumerosAUnSoloString
const transformarArrayDeNumerosAUnSoloString = (numeros, separador) => {
  console.log("//transformarArrayDeNumerosAUnSoloString//");
  console.log(numeros.join(separador));
};

transformarArrayDeNumerosAUnSoloString([1, 2, 3, 4, 5], ":");

//combinarDosArrays
const combinarDosArrays = (numeros1, numeros2) => {
  console.log("//combinarDosArrays//");
  let numeros = [];
  //eliminar repetidos
  [...numeros1, ...numeros2].forEach(
    (num) => numeros.indexOf(num) === -1 && numeros.push(num)
  );
  //ordeno
  console.log(numeros.sort());
};
combinarDosArrays([4, 5, 5], [1, 2, 3]);

//combinarNArrays
const combinarNArrays = (arrayDeArrays) => {
  console.log("//combinarNArrays//");
  let array = [];
  array = array.concat(...arrayDeArrays);
  console.log(array);
};
combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]);
 
