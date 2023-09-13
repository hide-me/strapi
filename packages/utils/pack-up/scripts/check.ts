import path from 'path';

import { check } from '../src/node';

check({
  cwd: path.resolve(__dirname, '..'),
}).catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err.stack);
  process.exit(1);
});
