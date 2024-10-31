import config from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  config({
    formatters: true,
    unocss: true,
  }),
)
