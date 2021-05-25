import _ from 'lodash';
import yaml from 'js-yaml';

const parsers = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.yaml': yaml.safeLoad,
};

export default ([data, extension]) => {
  if (!_.has(parsers, extension)) {
    throw new Error(`File extension ${extension} is not supported`);
  }
  return parsers[extension](data);
};
