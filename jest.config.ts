import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
  // './jest.setup.ts',
  // './__tests__/__mocks__/NavigationSetup'
  './__tests__/__mocks__/NavigationSetup.tsx'
  ],
  testEnvironment: 'node',
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  // cacheDirectory: '.jest/cache',

  // testEnvironmentOptions: {
  //   customExportConditions: [''],
  // },

  moduleNameMapper: {
    '^@notifee/react-native$': '<rootDir>__tests__/__mocks__/notifee-react-native.tsx',
  },

  testMatch: [
    '**/?(*.)+(test).+(ts|tsx|js|jsx)' // Matches files with .test.tsx, .test.jsx, .test.ts, .test.js
  ],
};

export default config;
