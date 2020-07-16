const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

const recognize = (data) => {
    tesseract.recognize(imgUrl, config)
      .then(text => {
        console.log("Result:", text)
      })
      .catch(error => {
        console.log(error.message)
      })
};

module.exports = {
  recognize: recognize,
}; 