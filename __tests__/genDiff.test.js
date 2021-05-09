import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1JSONContent = getFixturePath('file1.json');
const file2JSONContent = getFixturePath('file2.json');
const file1YAMLContent = getFixturePath('file1.yml');
const file2YAMLContent = getFixturePath('file2.yml');
const resultContent = readFile('expected.txt');

test('2 json files compare - string result', () => {
  expect(genDiff(file1JSONContent, file2JSONContent)).toBe(resultContent);
});

test('2 yaml files compare - string result', () => {
  expect(genDiff(file1YAMLContent, file2YAMLContent)).toBe(resultContent);
});
