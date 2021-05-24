import _ from 'lodash';

const indent = (depth) => '    '.repeat(depth);
const prefixes = {
  added: '  + ',
  removed: '  - ',
  unmodified: '    ',
};

const stringifyValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const stringifiedValue = keys.map((key) => `${indent(depth + 2)}${key}: ${stringifyValue(value[key], depth + 1)}`);
  return `{\n${stringifiedValue.join('\n')}\n${indent(depth + 1)}}`;
};

const stylish = (ast, depth = 0) => {
  const formattedAST = ast.map((node) => {
    switch (node.type) {
      case 'added':
        return `${indent(depth)}${prefixes.added}${node.name}: ${stringifyValue(node.value, depth)}`;
      case 'removed':
        return `${indent(depth)}${prefixes.removed}${node.name}: ${stringifyValue(node.value, depth)}`;
      case 'modified':
        return `${indent(depth)}${prefixes.removed}${node.name}: ${stringifyValue(node.value1, depth)}\n${indent(depth)}${prefixes.added}${node.name}: ${stringifyValue(node.value2, depth)}`;
      case 'unmodified':
        return `${indent(depth)}${prefixes.unmodified}${node.name}: ${stringifyValue(node.value, depth)}`;
      case 'nested':
        return `${indent(depth)}${prefixes.unmodified}${node.name}: ${stylish(node.children, depth + 1)}`;
      default:
        throw new Error(`"${node.type}" type is not supported.`);
    }
  });
  return `{\n${formattedAST.join('\n')}\n${indent(depth)}}`;
};

export default stylish;
