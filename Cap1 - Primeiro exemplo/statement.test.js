import statement from './statement.js';

import fs from 'fs';
const path = require('path');


test('example statement', () => {
  const invoice = JSON.parse(fs.readFileSync(path.resolve(__dirname, "test/invoice.json")));
  const plays = JSON.parse(fs.readFileSync(path.resolve(__dirname, "test/plays.json")));
  const statement_string = statement(invoice, plays);
  expect(statement_string).toMatchSnapshot();
});
