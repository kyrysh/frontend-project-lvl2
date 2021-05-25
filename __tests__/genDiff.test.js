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
const resultStylish = readFile('resultStylish.txt');
const resultPlain = readFile('resultPlain.txt');

test('Formatter stylish: json and yaml files compare', () => {
  expect(genDiff(file1JSONPath, file2JSONPath)).toBe(resultStylish);
  expect(genDiff(file1YAMLPath, file2YAMLPath)).toBe(resultStylish);
});

test('Formatter plain: json and yaml files compare', () => {
  expect(genDiff(file1JSONPath, file2JSONPath, 'plain')).toBe(resultPlain);
  expect(genDiff(file1YAMLPath, file2YAMLPath, 'plain')).toBe(resultPlain);
});
