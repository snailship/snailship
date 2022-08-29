module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
  },
  webpackFinal: async (config, {}) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['postcss-loader'],
    })
    return config
  },
}
