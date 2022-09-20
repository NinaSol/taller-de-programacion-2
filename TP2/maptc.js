import fs from "fs";

const dirPackage = "/home/nmarotta/Escritorio/TP2-TP2/package.json";
const dirInfo = "/home/nmarotta/Escritorio/TP2-TP2/info.txt";

let info = {
  contenidoStr: null,
  contenidoObj: null,
  size: null,
};

const fileContent = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dir, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const fileSize = (dir) => {
  return new Promise((resolve, reject) => {
    fs.stat(dir, (err, stats) => {
      if (err) reject(err);
      else resolve(stats.size);
    });
  });
};

const writeFile = (dir, content) => {
  fs.writeFile(dir, JSON.stringify(content, null, "\t"), (err, data) => {
    return new Promise((resolve, reject) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

fileContent(dirPackage)
  .then((res) => {
    info = {
      ...info,
      contenidoStr: res.toString().split("\n"),
      contenidoObj: JSON.parse(res),
    };
    return fileSize(dirPackage);
  })
  .then((res) => {
    info = {
      ...info,
      size: res,
    };
    return writeFile(dirInfo, info);
  })
  .then(() => {
    console.log(info);
  })
  .catch((err) => {
    throw new Error(err);
  });
