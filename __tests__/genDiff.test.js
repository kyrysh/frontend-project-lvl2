import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1JSONPath = getFixturePath('file1.json');
const file2JSONPath = getFixturePath('file2.json');
const file1YAMLPath = getFixturePath('file1.yml');
const file2YAMLPath = getFixturePath('file2.yml');
const result = readFile('result.txt');

test('2 json files compare', () => {
  expect(genDiff(file1JSONPath, file2JSONPath)).toBe(result);
});

test('2 yaml files compare', () => {
  expect(genDiff(file1YAMLPath, file2YAMLPath, 'stylish')).toBe(result);
});
