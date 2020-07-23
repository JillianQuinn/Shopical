const tesseract_ocr = require('./tesseract-ocr.js')
const query = require('./query.js')

// TODO: implement
async function edit_distance(word) {
  return word;
}

// TODO: fix error handling for bad formed SQL statements
// TODO: bulk SQL statements
async function main(text) {

  let words = text.replace(/\n/g, " ").toLowerCase().split(/[\s,.;:]+/);

  query.open();
  for (i = 0; i < words.length; ++i) {
    let res = await query.select_ingred(words[i]);
    console.log(res);
  }
  query.close();
}

//main("sample.png");
module.exports = { main : main };
