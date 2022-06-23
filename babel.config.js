module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          ui: './src/ui',
          common: './src/common',
          core: './src/core',
        },
      },
    ],
  ],
};
