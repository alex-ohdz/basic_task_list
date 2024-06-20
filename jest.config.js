module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transform: {
	  '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
	},
	moduleNameMapper: {
	  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	  '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
	  '^@/(.*)$': '<rootDir>/src/$1',
	},
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  };
  