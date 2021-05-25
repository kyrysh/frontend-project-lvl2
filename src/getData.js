import fs from 'fs';
import path from 'path';

export default (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(fullPath);
  const format = path.extname(fullPath, 'utf8');
  return [data, format];
};
