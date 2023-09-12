// Nested calc() is not supported by Safari on iOS 10.3
// https://caniuse.com/mdn-css_types_calc_nested
module.exports = function ({ matchUtilities, theme, variants }) {
  matchUtilities(
    {
      'space-x': (value) => {
        value = value === '0' ? '0px' : value

        return {
          '& > :not([hidden]) ~ :not([hidden])': {
            'margin-left': value,
          },
        }
      },
      'space-y': (value) => {
        value = value === '0' ? '0px' : value

        return {
          '& > :not([hidden]) ~ :not([hidden])': {
            'margin-top': value,
          },
        }
      },
    },
    {
      values: theme('space'),
      variants: variants('space'),
      type: 'any',
    },
  )
}
