module.exports = {
  js: {
    assets: true,
  },
  css: {
    px2rem: true,
    autoprefixer: true,
  },
  webpack: {
    externals: {
      vue: 'Vue',
      jquery: 'jQuery',
    },
    provide: {
      Vue: 'vue',
      $: 'jquery',
    }
  }
};
