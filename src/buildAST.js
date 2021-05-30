import _ from 'lodash';

const buildAST = (object1, object2) => {
  const keys1 = _.keys(object1);
  const keys2 = _.keys(object2);
  const keys = _.sortBy(_.union(keys1, keys2));

  return keys.map((key) => {
    if (!_.has(object1, key)) {
      return {
        name: key, type: 'added', value: object2[key],
      };
    }
    if (!_.has(object2, key)) {
      return {
        name: key, type: 'removed', value: object1[key],
      };
    }
    if (_.isPlainObject(object1[key]) && _.isPlainObject(object2[key])) {
      return {
        name: key, type: 'nested', children: buildAST(object1[key], object2[key]),
      };
    }
    if (!_.isEqual(object1[key], object2[key])) {
      return {
        name: key, type: 'modified', value1: object1[key], value2: object2[key],
      };
    }
    return {
      name: key, type: 'unmodified', value: object1[key],
    };
  });
};

export default buildAST;
