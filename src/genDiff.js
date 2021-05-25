import getData from './getData.js';
import parse from './parsers.js';
import buildAST from './buildAST.js';
import formatData from './formatters/index.js';

const genDiff = (filepath1, filepath2, formatterType = 'stylish') => {
  const file1ParsedData = parse(getData(filepath1));
  const file2ParsedData = parse(getData(filepath2));
  const AST = buildAST(file1ParsedData, file2ParsedData);
  // return AST;
  return formatData(AST, formatterType);
};

export default genDiff;
