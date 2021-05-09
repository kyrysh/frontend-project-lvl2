import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getFullFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileFormat = (fullFilePath) => path.extname(fullFilePath);
const getFileContent = (fullFilePath) => fs.readFileSync(fullFilePath);

export default (filepath) => {
  const fullPath = getFullFilePath(filepath);
  const format = getFileFormat(fullPath);
  const content = getFileContent(fullPath);

  switch (format) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
    case '.yaml':
      return yaml.load(content);
    default:
      throw new Error('Unknown extension');
  }
};
