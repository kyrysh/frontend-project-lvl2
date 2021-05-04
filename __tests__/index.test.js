import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1Content = getFixturePath('file1.json');
const file2Content = getFixturePath('file2.json');
const resultContent = readFile('expected.txt');

test('2 json files compare - string result', () => {
  expect(genDiff(file1Content, file2Content)).toBe(resultContent);
});
