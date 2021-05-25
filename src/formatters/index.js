import _ from 'lodash';
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

export default (data, formatter) => {
  if (!_.has(formatters, formatter)) {
    throw new Error(`${formatter} is not supported`);
  }
  return formatters[formatter](data);
};
