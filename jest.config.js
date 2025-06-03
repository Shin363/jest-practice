// jest.config.js
/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["jest-extended"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
