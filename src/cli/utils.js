const shell = require('shelljs');
class Utils {
  constructor() {}
  static createFile(filename, extension) {
    const filePath = `${process.cwd()}/${filename}.${extension}`;
    shell.touch(filePath);
    return filePath;
  }
}
module.exports = Utils
