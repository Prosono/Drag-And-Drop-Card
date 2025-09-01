import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const version = process.env.npm_package_version;
const banner = `/*!
 * Drag & Drop Card v${version}
 * Copyright (c) 2025 <SMARTi AS>. All rights reserved.
 * Proprietary: see EULA.md. Third-party notices: THIRD_PARTY_NOTICES.md
 */`;

export default {
  input: 'src/drag-and-drop-card.js',
  output: {
    file: 'dist/drag-and-drop-card.js',
    format: 'esm',
    sourcemap: true,
    banner
  },
  plugins: [
    resolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      __VERSION__: JSON.stringify(version)
    }),
    terser({
      format: {
        // keep license banners and 3rd-party MIT headers if present
        comments: /@license|@preserve|^\!/
      }
    })
  ]
};