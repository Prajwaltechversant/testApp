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
};

export default config;
