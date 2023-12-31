/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

function generateWidthFraction(widthDenominators) {
  const styles = {}
  widthDenominators.forEach((denominator) => {
    for (let i = 1; i < denominator; i++) {
      let w = (i / denominator) * 100
      w = Math.floor(w * 1e6) / 1e6
      styles[`${i}/${denominator}`] = `${w}%`
    }
  })
  return styles
}

module.exports = {
  presets: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      w: '#fff',
    },
    columns: {},
    spacing: ({ theme }) => Object.fromEntries(theme('spaces').map((px) => [px, `${px}px`])),
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      'fade-in': 'fade-in .4s',
    },
    aspectRatio: {},
    backdropBlur: {},
    backdropBrightness: {},
    backdropContrast: {},
    backdropGrayscale: {},
    backdropHueRotate: {},
    backdropInvert: {},
    backdropOpacity: {},
    backdropSaturate: {},
    backdropSepia: {},
    backgroundColor: ({ theme }) => ({
      body: theme('bodyBackgroundColor', '#fff'),
      ...theme('colors'),
    }),
    backgroundImage: {
      none: 'none',
    },
    backgroundOpacity: ({ theme }) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    blur: {
      0: '0',
      none: '0',
      4: '4px',
      DEFAULT: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      24: '24px',
      40: '40px',
      64: '64px',
    },
    brightness: {},
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.light.8', 'currentColor'),
    }),
    borderOpacity: ({ theme }) => theme('opacity'),
    borderRadius: {
      none: '0',
      2: '2px',
      DEFAULT: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      13: '13px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
      40: '40px',
      full: '9999Px',
    },
    borderWidth: {
      DEFAULT: '1Px',
      0: '0Px',
      2: '2Px',
      3: '3Px',
      4: '4Px',
      5: '5Px',
      8: '8Px',
    },
    boxShadow: {
      none: 'none',
    },
    boxShadowColor: ({ theme }) => theme('colors'),
    caretColor: ({ theme }) => theme('colors'),
    accentColor: {},
    contrast: {},
    container: {},
    content: {
      none: 'none',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
    },
    divideColor: ({ theme }) => theme('borderColor'),
    divideOpacity: ({ theme }) => theme('borderOpacity'),
    divideWidth: ({ theme }) => theme('borderWidth'),
    dropShadow: {},
    fill: { current: 'currentColor' },
    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },
    hueRotate: {},
    invert: {},
    flex: {
      1: '1 1 0%',
      2: '2 1 0%',
      3: '3 1 0%',
      4: '4 1 0%',
      5: '5 1 0%',
      6: '6 1 0%',
      7: '7 1 0%',
      8: '8 1 0%',
      9: '9 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: {},
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
      sf: ['SF Pro Text', 'simHei', 'ui-sans-serif', 'system-ui'],
    },
    fontSize: ({ theme }) => ({
      sm: ['12px', '20px'],
      base: ['14px', '22px'],
      md: ['16px', '24px'],
      lg: ['18px', '26px'],
      ...Object.fromEntries(theme('fontSizes').map((px) => [px, [`${px}px`, `${px + 8}px`]])),
    }),
    fontWeight: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600,
      7: 700,
      8: 800,
      9: 900,
    },
    gap: ({ theme }) => theme('spacing'),
    gradientColorStops: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridColumn: {},
    gridColumnEnd: {},
    gridColumnStart: {},
    gridRow: {},
    gridRowStart: {},
    gridRowEnd: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    height: ({ theme }) => ({
      auto: 'auto',
      page: 'calc(var(--vh, 1vh) * 99.99)',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
    keyframes: {
      spin: { to: { transform: 'rotate(360deg)' } },
      ping: { '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
      pulse: { '50%': { opacity: '.5' } },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
      'fade-in': { from: { opacity: 0 }, to: { opacity: 1 } },
      'slide-up': { from: { transform: 'translateY(10Px)' } },
      'slide-down': { to: { transform: 'translateY(10Px)' } },
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      inherit: 'inherit',
      '09': 0.9,
      '095': 0.95,
      10: 1,
      105: 1.05,
      11: 1.1,
      115: 1.15,
      12: 1.2,
      125: 1.25,
      13: 1.3,
      135: 1.35,
      14: 1.4,
      145: 1.45,
      15: 1.5,
      155: 1.55,
      16: 1.6,
      165: 1.65,
      17: 1.7,
      175: 1.75,
      18: 1.8,
      185: 1.85,
      19: 1.9,
      195: 1.95,
      20: 2,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    maxHeight: ({ theme }) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      0: 0,
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    minHeight: ({ theme }) => ({
      ...theme('spacing'),
      0: '0',
      full: '100%',
      page: 'calc(var(--vh, 1vh) * 99.99)',
      screen: '100vh',
    }),
    minWidth: ({ theme }) => ({
      0: '0',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      ...theme('spacing'),
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: ({ theme }) => theme('spacing'),
    placeholderColor: ({ theme }) => theme('colors'),
    placeholderOpacity: ({ theme }) => theme('opacity'),
    outlineColor: ({ theme }) => theme('colors'),
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringColor: ({ theme }) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: ({ theme }) => theme('colors'),
    ringOffsetWidth: {
      0: '0Px',
      1: '1Px',
      2: '2Px',
      4: '4Px',
      8: '8Px',
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3Px',
      0: '0Px',
      1: '1Px',
      2: '2Px',
      4: '4Px',
      8: '8Px',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    saturate: {},
    scale: {
      0: '0',
      50: '.5',
      60: '.6',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      101: '1.01',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    scrollMargin: ({ theme }) => ({
      ...theme('spacing'),
    }),
    scrollPadding: ({ theme }) => theme('spacing'),
    sepia: {},
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    space: ({ theme }) => ({
      ...theme('spacing'),
    }),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    textColor: ({ theme }) => ({ body: theme('bodyTextColor', '#000'), ...theme('colors') }),
    textDecorationColor: ({ theme }) => theme('colors'),
    textDecorationThickness: {
      auto: 'auto',
      'from-font': 'from-font',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textUnderlineOffset: {
      auto: 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textIndent: {},
    textOpacity: ({ theme }) => theme('opacity'),
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDelay: {
      0: '0ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDuration: {
      DEFAULT: '400ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: ({ theme }) => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
    width: ({ theme, breakpoints }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...breakpoints(theme('screens')),
      ...generateWidthFraction(theme('widthDenominators')),
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),
    willChange: {
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      transform: 'transform',
    },
    zIndex: {
      auto: 'auto',
      header: '20',
      footer: '20',
      popper: '100',
      modal: '1050',
      toast: '2050',
      '-1': '-1',
      0: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      max: '9999',
    },

    // 自定义选项
    widthDenominators: [2, 3, 4, 5, 6, 8, 12],
    square: ({ theme }) => ({
      DEFAULT: '1em',
      ...theme('spacing'),
    }),
  },
  corePlugins: {
    backdropFilter: false,
    brightness: false,
    contrast: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    gradientColorStops: false,
    gridAutoColumns: false,
    gridAutoFlow: false,
    gridAutoRows: false,
    gridColumn: false,
    gridColumnEnd: false,
    gridColumnStart: false,
    gridRow: false,
    gridRowEnd: false,
    gridRowStart: false,
    gridTemplateColumns: false,
    gridTemplateRows: false,
    space: false,
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  plugins: [
    plugin(require('./pluginVerticalAlign')),
    plugin(require('./pluginSquare')),
    plugin(require('./pluginSpace')),
    plugin(require('./pluginUtilities')),
  ],
}
