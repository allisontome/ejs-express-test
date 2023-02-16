const json = require('body-parser/lib/types/json');
const fs = require('fs');

const save = (model) => {
  fs.readFile('./DB/db.json', function (err, data) {
    if (err) throw err;
    let result = JSON.parse(data);
    result.push(model);
    fs.writeFile('./DB/db.json', JSON.stringify(result), function () {
      console.table(model);
      console.log('saved!');
    });
  });
};

const data = async () => {
  let r = await fs.readFileSync('./DB/db.json', function (err, data) {
    if (err) throw err;
    let result = JSON.parse(data);
    return result;
  });
  return r;
};

const remove = (id) => {
  fs.readFile('./DB/db.json', function (err, data) {
    if (err) throw err;
    let result = JSON.parse(data);
    let newData = result.filter((el) => el.id != id);
    fs.writeFile('./DB/db.json', JSON.stringify(newData), function () {
      console.log(id);
      console.log('removed!');
    });
  });
};

/*
const backup = () => {
  setInterval(() => {
    fs.readFile('./DB/db.json', function (err, data) {
      if (err) throw err;
      let actualData = JSON.parse(data);
      fs.readFile('./DB/db-backup.json', function (err, data2) {
        if (err) throw err;
        let backupData = JSON.parse(data2);
        backupData.push({ actualData, date: new Date() });
        fs.writeFile(
          `./DB/db-backup.json`,
          JSON.stringify(backupData),
          function () {
            console.log('backup done!');
          }
        );
      });
    });
  }, 10000);
};
*/
const edit = () => {};

const verifyModelReceived = () => {};

module.exports = {
  save,
  remove,
  edit,
  data,
};
