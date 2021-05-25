import getData from './getData.js';
import parse from './parsers.js';
import buildAST from './buildAST.js';
import formatData from './formatters/index.js';

export default (filepath1, filepath2, formatterType = 'stylish') => {
  const file1ParsedData = parse(getData(filepath1));
  const file2ParsedData = parse(getData(filepath2));
  const AST = buildAST(file1ParsedData, file2ParsedData);
  return formatData(AST, formatterType);
};
