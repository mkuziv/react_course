/* eslint-disable linebreak-style */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/styleMock.js',
  },
  roots: ['<rootDir>/src'],
};
