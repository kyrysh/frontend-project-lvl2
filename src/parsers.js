import _ from 'lodash';
import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.safeLoad,
  yaml: yaml.safeLoad,
};

export default (data, type) => {
  if (!_.has(parsers, type)) {
    throw new Error(`File type ${type} is not supported`);
  }
  return parsers[type](data);
};
