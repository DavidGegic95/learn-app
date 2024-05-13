export default {
  preset: 'ts-jest',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transformIgnorePatterns: ['/node_modules/', '\\.css$'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
