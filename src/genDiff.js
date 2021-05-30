import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildAST from './buildAST.js';
import formatData from './formatters/index.js';

const getData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(fullPath);
  const format = path.extname(fullPath, 'utf8');
  return parse(data, format);
};

export default (filepath1, filepath2, formatterType = 'stylish') => {
  const file1ParsedData = getData(filepath1);
  const file2ParsedData = getData(filepath2);
  const AST = buildAST(file1ParsedData, file2ParsedData);
  return formatData(AST, formatterType);
};
