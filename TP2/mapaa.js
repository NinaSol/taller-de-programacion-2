import fs from "fs";

const dirPackage = "/home/nmarotta/Escritorio/TP2-TP2/package.json";
const dirInfo = "/home/nmarotta/Escritorio/TP2-TP2/info.txt";

let info = {
  contenidoStr: null,
  contenidoObj: null,
  size: null,
};

const fileContent = async (dir) => {
  try {
    const data = (await fs.promises.readFile(dir)).toString();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const fileSize = async (dir) => {
  try {
    return (await fs.promises.stat(dir)).size;
  } catch (err) {
    throw new Error(err);
  }
};

const writeFile = async (dir, content) => {
  try {
    return await fs.promises.writeFile(
      dir,
      JSON.stringify(content, null, "\t")
    );
  } catch (err) {
    throw new Error(err);
  }
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
  });
