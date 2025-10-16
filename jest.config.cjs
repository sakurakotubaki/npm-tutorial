/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Allow transforming ESM packages like zod which ship ES modules in node_modules
  transformIgnorePatterns: [
    'node_modules/(?!(zod)/)'
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
