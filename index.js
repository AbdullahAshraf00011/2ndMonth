const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(data);
});
fs.writeFile('file2.txt',"My first Write",err => {
    if (err) {
      console.error(err);
    }
});