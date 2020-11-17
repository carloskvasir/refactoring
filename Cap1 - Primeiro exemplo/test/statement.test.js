import statement from '../statement.js';

import fs from 'fs';
import path from 'path';

test('example statement', () => {
  const invoice = JSON.parse(fs.readFileSync(path.resolve(__dirname, "invoice.json")));
  const plays = JSON.parse(fs.readFileSync(path.resolve(__dirname, "plays.json")));
  const statement_string = statement(invoice, plays);
  expect(statement_string).toMatchSnapshot();
});
