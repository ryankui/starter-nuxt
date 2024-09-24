import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  shortcuts: [
    {
      'border-base': 'border-gray-200 dark:border-gray-800',
      'bg-active': 'bg-gray:10',
      'bg-faded': 'bg-gray:5',
      'bg-base': 'bg-white dark:bg-[#020420]',
      'text-faded': 'text-gray6:100 dark:text-gray3:80',

      'bg-code': 'bg-gray/5',

      'bg-inline-code': 'bg-gray-100 dark:bg-gray-800/75',
      'border-inline-code': 'border-gray-200 dark:border-gray-700/75',
    },
  ],
  rules: [],
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetAnimations(),
    presetShadcn({
      color: 'slate',
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        '(components|src)/**/*.{js,ts}',
      ],
    },
  },
})
