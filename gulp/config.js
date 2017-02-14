import { debug, production } from './helpers/getArg'

export default {
  src: './src',
  dest: './dist',
  vueLibBuildIn:true,
  app: '/app',
  components: './src/components',
  pages: './src/pages',

  assets: {
    images: 'statics/images',
    scripts: 'statics/scripts',
    styles: 'statics/styles',
    fonts: 'statics/fonts',
  },

  isProduction: production,
  isDeveloper: !production,
  isDebug: debug,
  NODE_ENV: production ? 'production' : 'developer',

  server: {
    port: 8081,
  },
}
