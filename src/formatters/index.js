import stylish from './stylish.js';

export default (data, formatter) => {
  switch (formatter) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error('Unsupported formatter');
  }
};
