module.exports = {
  presets: [require('./src/css/tw/preset')],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './src/css/transition/*.scss'],

  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1230px',
        '2xl': '1728px',
      },
      container: {
        center: true,
        padding: '15px',
      },
      colors: {
        dark: {
          0: '#001529',
          1: '#11242f',
          2: '#221d35',
          3: '#353535',
          4: '#4a4a4a',
          5: '#555',
          6: '#666',
          7: '#72777a',
          8: '#8c8c8c',
          9: '#979c9e',
          10: '#777790',
          ee: '#EEF2F6',
        },
        light: {
          1: '#a3a9af',
          2: '#bbb',
          3: '#c4c4c4',
          4: '#ddd',
          5: '#d3d4d8',
          6: '#d8d8d8',
          7: '#e5e5e5',
          75: '#EDF2F7',
          8: '#f1f1f1',
          83: '#F3F3F3',
          85: '#f4f7fb',
          9: '#f9f9f9',
          aqua: '#f6fafc',
          purple: 'rgb(114, 46, 209)',
        },
        p: {
          DEFAULT: '#11242f',
          hover: 'rgba(17, 36, 47, 0.7)',
          active: '#11242f',
        },
        alt: {
          DEFAULT: '#54b7ad',
        },
        info: {
          light: '#2F80ED',
          DEFAULT: '#0a37f2',
          active: '#2395f1',
        },
        danger: {
          DEFAULT: '#ff4d4f',
        },
        success: {
          soft: '#f2fcf7',
          DEFAULT: '#28ca42',
          dark: '#006a51',
        },
        warning: {
          DEFAULT: '#f9d247',
        },
        status: {
          green: '#52c41a',
          blue: '#1890ff',
          orange: '#faad14',
          red: '#ff4d4f',
          gray: '#b1b3b8',
          created: '#ff6200',
          scheduled: '#dfbea8',
          pending: '#0091ff',
          processing: '#af51de',
          onhold: '#f7b500',
          executed: '#06ca64',
          rejected: '#fe2b52',
          cancelled: '#9b9b9b',
          completed: '#6dd400',
          partcompleted: '#4a4a4a',
          voided: '#9b9b9b',
        },
        message: {
          system: 'rgba(0, 0, 0, .3)',
          gray: '#a0acb6',
          user: '#ce671b',
        },
      },
      borderColor: {
        DEFAULT: '#e5e5e5',
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
