const tesseract_ocr = require('./tesseract-ocr.js')
const query = require('./query.js')

// TODO: implement
async function edit_distance(word) {
  return word;
}

// TODO: fix error handling for bad formed SQL statements
// TODO: bulk SQL statements
async function main(image) {
  query.open();
  let text = await tesseract_ocr.ocr(image);
  let words = text.split(" ");
  for (i = 0; i < words.length; ++i) {
    let res = await query.select_ingred(words[i]);
    console.log(res);
  }
}

main("sample.png");
