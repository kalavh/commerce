const path = require('path');

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, '.webpack'),
      ],
      use: {
        loader: "swc-loader",

      },
      resolve: {
        alias: {
          '@src': path.resolve(__dirname, 'src'),
        },
      },
    },
  ]
};