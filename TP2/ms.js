import fs from "fs";

const dirPackage = "/home/nmarotta/Escritorio/TP2-TP2/package.json";
const dirInfo = "/home/nmarotta/Escritorio/TP2-TP2/info.txt";

const fileContent = (dirPackage) => {
  try {
    return fs.readFileSync(dirPackage, { encoding: "utf8", flag: "r" });
  } catch (err) {
    throw new Error(err.message);
  }
};
const fileSize = (dirPackage) => {
  try {
    return fs.statSync(dirPackage).size;
  } catch (err) {
    throw new Error(err.message);
  }
};

const writeFile = (info) => {
  try {
    return fs.writeFileSync(dirInfo, JSON.stringify(info, null, "\t"));
  } catch (err) {
    throw new Error(err.message);
  }
};

const info = {
  contenidoStr: fileContent(dirPackage).toString().split("\n"),
  contenidoObj: JSON.parse(fileContent(dirPackage)),
  size: fileSize(dirPackage),
};

console.log(info);

writeFile(info);
