const { defaults } = require('jest-config')

module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>setup-tests.js',
  verbose: true,
  preset: 'jest-expo',
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
