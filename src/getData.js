import fs from 'fs';
// import path from 'path';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (filepath) => {
  // const fullPath = path.resolve(process.cwd(), filepath);
  const fullPath = path.join(__dirname, '..', '__fixtures__', filepath);
  const data = fs.readFileSync(fullPath);
  const format = path.extname(fullPath, 'utf8');
  return [data, format];
};
