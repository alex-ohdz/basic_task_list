module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transform: {
	  '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
	  '\\.svg$': 'jest-transform-stub',
	},
	moduleNameMapper: {
	  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	  '^@/(.*)$': '<rootDir>/src/$1',
	},
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  };
  