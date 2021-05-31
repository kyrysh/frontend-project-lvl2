import _ from 'lodash';

const stringifyValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : String(value);
};

const plain = (ast, pathElements = []) => {
  const formattedAST = _.compact(ast.map((node) => {
    const newPathElements = [...pathElements, node.name];
    const nodePath = newPathElements.join('.');

    switch (node.type) {
      case 'added':
        return `Property '${nodePath}' was added with value: ${stringifyValue(node.value)}`;
      case 'removed':
        return `Property '${nodePath}' was removed`;
      case 'modified':
        return `Property '${nodePath}' was updated. From ${stringifyValue(node.value1)} to ${stringifyValue(node.value2)}`;
      case 'unmodified':
        return '';
      case 'nested':
        return `${plain(node.children, newPathElements)}`;
      default:
        throw new Error(`"${node.type}" type is not supported.`);
    }
  }));
  return `${formattedAST.join('\n')}`;
};

export default plain;
