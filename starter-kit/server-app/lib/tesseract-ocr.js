const tesseract = require("node-tesseract-ocr")
 
const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

module.exports = {
  ocr: async function (image) {
    return await tesseract.recognize("sample.png", config);
  }
}
