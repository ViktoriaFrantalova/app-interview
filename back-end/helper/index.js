const fs = require("fs");
const path = require("path");
const pathResolver = inputPath => path.resolve(__dirname, inputPath);
const pathData = pathResolver("../data/data.json");

const storeData = async data => {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathData, JSON.stringify(data, null, 2), "utf8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

const loadData = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathData, "utf8", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

module.exports = {
  storeData,
  loadData,
};
