import { processPackage } from '@3xpo/pkgmetatool';
import fs from 'fs';

const pkgPath = './package.json';
const pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
fs.writeFileSync(
  pkgPath,
  JSON.stringify(
    processPackage(pkgJson, {
      license: 'MIT',
      author: 'Expo',
      repository: 'https://codeberg.org/Expo/lua-fmt.git',
      bugs: {
        url: 'AUTO',
        email: 'lua-fmt@breadhub.cc',
      },
      ensureExports: true,
      fallbackTypings: true,
      sort: true,
    }),
    null,
    2,
  ) + '\n',
);
