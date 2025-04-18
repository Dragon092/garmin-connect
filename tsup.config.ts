import { defineConfig } from 'tsup';

export default defineConfig({
    entryPoints: ['src/**/*.ts'],
    splitting: false,
    format: ['cjs', 'esm'],
    dts: true,
    outDir: 'dist',
    clean: true
});
