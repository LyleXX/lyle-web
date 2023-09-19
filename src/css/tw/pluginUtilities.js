module.exports = function ({ addBase, addUtilities, addComponents, theme }) {
  let bodyFontSize = theme('fontSize')?.base || '14px'
  if (Array.isArray(bodyFontSize)) bodyFontSize = bodyFontSize[0]

  addBase({
    '*, ::before, ::after': {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      'overflow-wrap': 'break-word',
    },

    body: {
      color: theme('bodyTextColor'),
      backgroundColor: theme('bodyBackgroundColor'),
      fontSize: bodyFontSize,
      lineHeight: `${parseInt(bodyFontSize) + 8}px`,
    },

    a: {
      '-webkit-tap-highlight-color': 'transparent',
    },
  })

  addComponents({
    '.icon': {
      width: '1em',
      height: '1em',
      display: 'inline-block',
      'vertical-align': '-0.15em',
    },
  })

  addUtilities({
    '.w-page': {
      width: '1230px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'padding-left': '15px',
      'padding-right': '15px',
    },

    '.hvc': {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
    '.touch-callout-none': { '-webkit-touch-callout': 'none' },
    '.tap-highlight-transparent': {
      '-webkit-tap-highlight-color': 'transparent',
    },
    '.ghost-hidden': {
      position: 'absolute',
      opacity: '0',
      width: '0',
      height: '0',
      overflow: 'hidden',
    },

    '.pb-safe': {
      paddingBottom: 'env(safe-area-inset-bottom)',
    },

    '.text-shadow-6': {
      'text-shadow': '-0.06ex 0 currentColor, 0.06ex 0 currentColor',
    },
    '.flex-center': {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
  })
}
