/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  testMatch: [
    "**/**/*.test.js"
  ],
};
