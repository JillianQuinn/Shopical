const tesseract_ocr = require('./tesseract-ocr.js')
const query = require('./query.js')

// TODO: implement
async function edit_distance(word) {
  return word;
}

// TODO: fix error handling for bad formed SQL statements
// TODO: bulk SQL statements
async function main(text) {
  query.open();
  //let text = await tesseract_ocr.ocr(image);
  //let words = text.split(/(\s+)/).filter( e => e.trim().length > 0);
  var list_of_ingreds = []

  let words = text.replace(/\n/g, " ").toLowerCase().split(/[\s,.;:]+/);
  for (i = 0; i < words.length; ++i) {
    let res = await query.select_ingred(words[i]);
    console.log(res);
    if (res.length != 0) { list_of_ingreds.push(res); }
  }
  query.close();
  return list_of_ingreds;
}

//main("oxybenzone, siloxane, hello");
//module.exports = { main : main };
