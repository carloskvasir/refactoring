import statement from '../statement.js';

import fs from 'fs';
import path from 'path';
describe('Capitulo 1', () => {
  test('example statement ok', () => {
    const invoice = JSON.parse(fs.readFileSync(path.resolve(__dirname, "invoice.json")));
    const plays = JSON.parse(fs.readFileSync(path.resolve(__dirname, "plays-ok.json")));
    const statement_string = statement(invoice, plays);
    expect(statement_string).toMatchSnapshot();
  });

  test('example statement fails', () => {
    const invoice = JSON.parse(fs.readFileSync(path.resolve(__dirname, "invoice.json")));
    const plays = JSON.parse(fs.readFileSync(path.resolve(__dirname, "plays-error.json")));

    function invalid(){
      statement(invoice, plays);
    }

    expect(invalid).toThrowError('unknown type');
  });
});
