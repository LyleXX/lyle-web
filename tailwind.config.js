module.exports = {
  presets: [require('./src/css/tw/preset')],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/css/transition/*.scss'],

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        pc: '1330px',
      },
      container: {
        center: true,
        padding: '15px',
      },
      colors: {
        p: 'rgb(var(--p) / <alpha-value>)',
        n: 'rgb(var(--n) / <alpha-value>)',
        pt: 'rgb(var(--pt) / <alpha-value>)',
        bb: 'rgb(var(--bb) / <alpha-value>)',
        b1: 'rgb(var(--b1) / <alpha-value>)',
        b2: 'rgb(var(--b2) / <alpha-value>)',
        b4: 'rgb(var(--b4) / <alpha-value>)',
        t1: 'rgb(var(--t1) / <alpha-value>)',
        t3: 'rgb(var(--t3) / <alpha-value>)',
        t4: 'rgb(var(--t4) / <alpha-value>)',
        bd: 'rgb(var(--bd) / <alpha-value>)',
        white: '#fff',
      },
      borderColor: {
        DEFAULT: 'rgb(var(--bd) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-image-text': 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, .7))',
        'gradient-mask-trial':
          'linear-gradient(to bottom, transparent, cubic-bezier(0, 0, 0.15, 1), rgba(255, 255, 255, 1))',
        'gradient-mask-footer':
          'linear-gradient(to bottom, transparent, cubic-bezier(0.25, 0, 0, 1), rgba(255, 255, 255, 1))',
      },
      boxShadow: {
        avatar: '0 0 2Px rgba(0, 0, 0, 0.2)',
        header: '0 0 10Px rgba(74, 74, 74, 0.2)',
        popper: '0 0 10Px rgba(74, 74, 74, 0.2)',
        notification: '0 0 10Px rgba(74, 74, 74, 0.2)',
        panel: '0 5Px 10Px rgba(0, 0, 0, 0.05)',
        card: '0 2Px 20Px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 6Px 30Px rgba(0, 0, 0, 0.3)',
        'route-loading': '0 0 6Px rgb(6, 202, 100, 0.4)',
        'footer-back': '0 0 5Px #000000',
        10: '0 0 10Px rgba(74, 74, 74, 0.15)',
        5: '0 0 5Px rgba(74, 74, 74, 0.15)',
        'tool-button': '0 5Px 10Px rgba(0, 0, 0, 0.05)',
        'head-img': '0 7Px 16Px rgba(20, 20, 20, 0.13)',
        input: 'inset 0 1Px 6Px rgba(0, 0, 0, 0.2)',
      },
      dropShadow: {
        popper: '0 0 10Px rgba(74, 74, 74, 0.2)',
      },
      ringColor: (theme) => ({
        DEFAULT: theme('colors.success.DEFAULT', '#06CA64'),
      }),
      keyframes: {
        'route-loading': {
          from: {
            transform: 'translateX(-95%) scaleX(0.9)',
          },
          to: {
            transform: 'translateX(58%) scaleX(0.1)',
          },
        },
      },
      animation: {
        'route-loading': 'route-loading 4s linear infinite',
      },
      fontFamily: {
        lt: ['lt', 'system-ui'],
        oppo: ['oppo-sans-b', 'system-ui'],
      },
      maxWidth: {
        page: '414px',
      },
      width: {
        'col-1-3': '32%',
      },
    },

    // 以下为自定义选项
    // body color
    bodyTextColor: '#11242f',
    // body background color
    bodyBackgroundColor: '#f3f3f3',
    // 转换成 spacing 需要的格式
    spaces: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28,
      30, 32, 33, 34, 35, 36, 38, 40, 42, 44, 45, 46, 48, 50, 52, 55, 58, 60, 65, 70, 75, 80, 84,
      90, 100, 110, 120, 130, 132, 140, 150, 160, 190, 200, 210, 220, 230, 235, 240, 250, 260, 270,
      280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460,
      470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600,
    ],
    // 合并到 fontSize
    fontSizes: [
      0, 9, 10, 11, 13, 15, 17, 19, 20, 22, 24, 25, 26, 28, 30, 32, 35, 36, 38, 40, 42, 44, 48, 52,
    ],
  },
  plugins: [
    require('tailwindcss/nesting'),
    require('@tailwindcss/typography')({ target: 'legacy' }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    function ({ addBase, addUtilities, addComponents, addVariant, theme }) {
      addVariant('spotlight', '.spotlight &')
      addVariant('zen', '.zen &')
      addVariant('td', '& td')
      addComponents({})
    },
  ],
}
