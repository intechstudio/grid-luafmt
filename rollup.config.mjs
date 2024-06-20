import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

export default [
  // Configuration for generating JavaScript and type declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es', // ES6 module format
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
      nodeResolve(),
      commonjs(),
    ],
    external: ['tslib'],
  },
  // Configuration for bundling type declarations
  {
    input: './dist/types/index.d.ts',
    output: {
      file: './dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
