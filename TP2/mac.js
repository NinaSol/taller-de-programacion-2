import fs from "fs";

const dirPackage = "/home/nmarotta/Escritorio/TP2-TP2/package.json";
const dirInfo = "/home/nmarotta/Escritorio/TP2-TP2/info.txt";

fs.readFile(dirPackage, "utf8", (err, data) => {
  if (err) throw new Error(err.message);
  fs.stat(dirPackage, (err, stats) => {
    if (err) throw new Error(err.message);
    const info = {
      contenidoStr: data.toString().split("\n"),
      contenidoObj: JSON.parse(data),
      size: stats.size,
    };
    console.log(info);
    fs.writeFile(dirInfo, JSON.stringify(info, null, "\t"), (err) => {
      if (err) throw new Error(err.message);
    });
  });
});
