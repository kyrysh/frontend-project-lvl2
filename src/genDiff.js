// import fs from 'fs';
// import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';

// const getFullFilePath = (filepath) => path.resolve(process.cwd(), filepath);
// const getJSONfileContent = (fullFilePath) => JSON.parse(fs.readFileSync(fullFilePath));

export default (filepath1, filepath2) => {
  const file1Content = parse(filepath1);
  const file2Content = parse(filepath2);
  const file1Keys = _.keys(file1Content);
  const file2Keys = _.keys(file2Content);
  const keys = _.union(file1Keys, file2Keys).sort();

  const diffs = keys.reduce((acc, key) => {
    const value1 = file1Content[key];
    const value2 = file2Content[key];
    if (!_.has(file1Content, key)) {
      return [...acc, `  + ${key}: ${file2Content[key]}`];
    } if (!_.has(file2Content, key)) {
      return [...acc, `  - ${key}: ${value1}`];
    } if (value1 !== value2) {
      return [...acc, `  - ${key}: ${value1}`, `  + ${key}: ${value2}`];
    }
    return [...acc, `    ${key}: ${value1}`];
  }, []);

  const result = `{\n${diffs.join('\n')}\n}`;
  return result;
};
