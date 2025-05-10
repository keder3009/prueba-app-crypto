module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    // Configura setup de Jest si es necesario, puedes dejar esto vacío o añadir una configuración si se requiere.
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};