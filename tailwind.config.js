/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// function pxToVw($px, $mobile) {
//   $mobile = $mobile || false
//   $viewport = $mobile === false ? '1440' : '360'
//   return $px / ($viewport * 0.01) + 'vw'
// }
function pxToEm($px) {
  return $px / 16 + 'rem'
}
const remBorder = {
  0: pxToEm(0),
  1: pxToEm(1),
  2: pxToEm(2),
  4: pxToEm(4),
  8: pxToEm(8),
}

const remSpacing = {
  1240: pxToEm(1240),
  1168: pxToEm(1168),
  1125: pxToEm(1125),
  976: pxToEm(976),
  960: pxToEm(960),
  864: pxToEm(864),
  800: pxToEm(800),
  784: pxToEm(784),
  752: pxToEm(752),
  741: pxToEm(741),
  720: pxToEm(720),
  691: pxToEm(691),
  688: pxToEm(688),
  672: pxToEm(672),
  656: pxToEm(656),
  650: pxToEm(650),
  631: pxToEm(631),
  624: pxToEm(624),
  620: pxToEm(620),
  618: pxToEm(618),
  609: pxToEm(609),
  600: pxToEm(600),
  592: pxToEm(592),
  576: pxToEm(576),
  563: pxToEm(563),
  560: pxToEm(560),
  544: pxToEm(544),
  528: pxToEm(528),
  514: pxToEm(514),
  510: pxToEm(510),
  496: pxToEm(496),
  488: pxToEm(488),
  480: pxToEm(480),
  465: pxToEm(465),
  464: pxToEm(464),
  448: pxToEm(440),
  440: pxToEm(440),
  416: pxToEm(416),
  408: pxToEm(408),
  400: pxToEm(400),
  384: pxToEm(384),
  368: pxToEm(368),
  363: pxToEm(363),
  352: pxToEm(352),
  336: pxToEm(336),
  320: pxToEm(320),
  304: pxToEm(304),
  288: pxToEm(288),
  276: pxToEm(276),
  272: pxToEm(272),
  270: pxToEm(270),
  261: pxToEm(261),
  256: pxToEm(256),
  248: pxToEm(248),
  240: pxToEm(240),
  232: pxToEm(232),
  224: pxToEm(224),
  221: pxToEm(221),
  208: pxToEm(208),
  200: pxToEm(200),
  192: pxToEm(192),
  184: pxToEm(184),
  178: pxToEm(178),
  176: pxToEm(176),
  168: pxToEm(168),
  160: pxToEm(160),
  152: pxToEm(152),
  150: pxToEm(150),
  144: pxToEm(144),
  136: pxToEm(136),
  130: pxToEm(130),
  128: pxToEm(128),
  127: pxToEm(127),
  120: pxToEm(120),
  115: pxToEm(115),
  112: pxToEm(112),
  100: pxToEm(100),
  99: pxToEm(99),
  96: pxToEm(96),
  95: pxToEm(95),
  92: pxToEm(92),
  90: pxToEm(90),
  89: pxToEm(89),
  88: pxToEm(88),
  85: pxToEm(85),
  80: pxToEm(80),
  75: pxToEm(75),
  73: pxToEm(73),
  72: pxToEm(72),
  65: pxToEm(65),
  64: pxToEm(64),
  60: pxToEm(60),
  57: pxToEm(57),
  55: pxToEm(55),
  54: pxToEm(54),
  52: pxToEm(52),
  50: pxToEm(50),
  48: pxToEm(48),
  46: pxToEm(46),
  45: pxToEm(45),
  44: pxToEm(44),
  43: pxToEm(43),
  40: pxToEm(40),
  38: pxToEm(38),
  36: pxToEm(36),
  35: pxToEm(35),
  33: pxToEm(33),
  32: pxToEm(32),
  30: pxToEm(30),
  29: pxToEm(29),
  28: pxToEm(28),
  26: pxToEm(26),
  25: pxToEm(25),
  24: pxToEm(24),
  23: pxToEm(23),
  '22-4': pxToEm(22.4),
  22: pxToEm(22),
  21: pxToEm(21),
  20: pxToEm(20),
  18: pxToEm(18),
  17: pxToEm(17),
  16: pxToEm(16),
  15: pxToEm(15),
  13: pxToEm(13),
  14: pxToEm(14),
  12: pxToEm(12),
  10: pxToEm(10),
  8: pxToEm(8),
  7: pxToEm(7),
  '6-4': pxToEm(6.4),
  5: pxToEm(5),
  3: pxToEm(3),
  2: pxToEm(2),
  1: pxToEm(1),
  '1px': '1px',
  0: pxToEm(0),
}
const grid = {
  initial: 'initial',
  0: '0',
  auto: 'auto',
  full: '100%',
  '5percent': '5%',
  '10percent': '10%',
  '15percent': '15%',
  '18percent': '18%',
  '20-3percent': '20.3%',
  '66-5percent': '66.5%',
  '79-7percent': '79.7%',
  '22percent': '22%',
  '23percent': '23%',
  '30percent': '30%',
  '32percent': '32%',
  '35percent': '35%',
  '37percent': '37%',
  '40percent': '40%',
  '42percent': '42%',
  '44percent': '44%',
  '45percent': '45%',
  '48percent': '48%',
  '52percent': '52%',
  '57percent': '57%',
  '58percent': '58%',
  '60percent': '60%',
  '68percent': '68%',
  '70percent': '70%',
  '78percent': '78%',
  '80percent': '80%',
  '85percent': '85%',
  '87percent': '87%',
  '90percent': '90%',
  '92percent': '92%',
  '95percent': '95%',
  '96percent': '96%',
  '98percent': '98%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '2/9': '22%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
}

module.exports = {
  theme: {
    screens: {
      // sm: { max: '639px' }, // smartphone
      // md: { max: '768px' }, // tablet
      // lg: { max: '1440px' }, // desktop
      // xl: { min: '1441px' }, // xtra large desktop, my


      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',

      // mcbook = 1440px x 769


      // redcomm
      sm: { max: '639px' },
      md: { max: '768px' },
    },
    left: {
      100: '52rem',
    },
    fill: (theme) => ({
      white: theme('colors.white'),
    }),
    fontSize: {
      ...remSpacing,
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      ...remSpacing,
    },
    spacing: {
      ...remSpacing,
      ...grid,
    },
    inset: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      ...grid,
      ...negative(grid),
    }),
    width: (theme) => ({
      ...theme('spacing'),
      ...grid,
      screen: '100vw',
    }),
    minWidth: (theme) => ({
      ...theme('spacing'),
      ...grid,
      screen: '100vw',
    }),
    height: (theme) => ({
      ...theme('spacing'),
      ...grid,
      screen: '100vh',
      halfscreen: '50vh',
    }),
    minHeight: (theme) => ({
      ...theme('spacing'),
      ...grid,
      screen: '100vh',
      halfscreen: '50vh',

    }),
    borderWidth: {
      ...remBorder,
    },
    placeholderColor: (theme) => theme('colors'),
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        xl: '1rem',
        ...remSpacing,
      },
      translate: (theme, { negative }) => ({
        ...grid,
        ...negative(grid),
      }),
      transitionProperty: {
        'width': 'width'
      },
      colors: {
        orange: {
          100: '#FDF0EA',
          200: '#FBD9CB',
          300: '#F8C2AB',
          400: '#F3946D',
          500: '#EE662E',
          600: '#D7490D',
          700: '#8F3D1C',
          800: '#6B2E15',
          900: '#471F0E',
        },
        gray: {
          100: '#F6F6F6',
          200: '#E9E9E9',
          300: '#DBDBDB',
          400: '#C1C1C1',
          500: '#A6A6A6',
          600: '#959595',
          700: '#646464',
          800: '#4B4B4B',
          900: '#323232',
        },
        'gray-light': {
          100: '#FBFBFB',
          200: '#F4F4F4',
          300: '#EDEDED',
          400: '#E0E0E0',
          500: '#D2D2D2',
          600: '#BDBDBD',
          700: '#7E7E7E',
          800: '#5F5F5F',
          900: '#3F3F3F',
        },
        f0f0f0: '#f0f0f0',
        c0c0c0: '#c0c0c0',
        identity: { // https://colorhunt.co/palette/125b50f8b400faf5e4ff6363
          0: '#2F8F9D',
          green: '#125B50',
          yellow: '#F8B400',
          cream: '#FAF3E3',
          peach: '#FF6363',
          darkgray: '#3F4E4F',
        },
        logo: {
          red: '#ef4570',
          green: '#00d7a1',
          blue: '#088bb3',
        }
      },
      boxShadow: (theme) => ({
        outline: '0 0 0 2px ' + theme('colors.indigo.500'),
      }),
      fill: (theme) => theme('colors'),
      backgroundImage: theme => ({
        'siskohat': "url('/background.gif')",
       }),
    },
  },
  variants: {
    fill: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'focus-within',
      'disabled',
    ],
    display: ['responsive', 'hover', 'group-hover', 'focus'],
    zIndex: ['responsive', 'focus'],
    borderWidth: ['responsive', 'hover'],
    margin: ['responsive', 'hover', 'group-hover'],
    inset: ['responsive', 'hover', 'group-hover'],
    opacity: ['responsive', 'hover', 'group-hover'],
    translate: ['responsive', 'hover', 'group-hover'],
    visibility: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'group-hover', 'disabled'],
    borderColor: ['responsive', 'hover', 'group-hover', 'focus'],
    scale: ['responsive', 'hover', 'group-hover'],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms'),
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '.filter-bw': {
          filter: 'grayscale(1)',
        },
        '.filter-c4c4c4': {
          filter:
            'invert(96%) sepia(0%) saturate(0%) hue-rotate(138deg) brightness(84%) contrast(85%)',
        },
        '.filter-bw-invert': {
          filter: 'grayscale(1) invert(1)',
        },
        '.filter-invert': {
          filter: 'invert(1)',
        },
        '.filter-none': {
          filter: 'none',
        },
        '.brightness-40': {
          filter: 'brightness(0.4)',
        },
        '.backdrop-filter-20': {
          'backdrop-filter': 'blur(20px)',
        },
        '.image-yellow-500': {
          filter:
            'brightness(0) saturate(100%) invert(96%) sepia(51%) saturate(6343%) hue-rotate(303deg) brightness(107%) contrast(88%)',
        },
        '.gradient-black-transparent': {
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0) 100%)',
        },
        '.gradient-white-transparent': {
          background:
            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.908000700280112) 50%, rgba(255,255,255,1) 100%)',
        },
        '.bg-white-50': {
          background: 'rgba(255,255,255,.5)',
        },
        '.line-through-black': {
          'text-decoration': 'line-through black',
        },
        '.text-line-4': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
        },
        '.text-line-3': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
        '.text-line-2': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.text-line-1': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
        },
        '.text-stroke-1px': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': theme('colors.white'),
        },
        '.text-stroke-0': {
          '-webkit-text-stroke-width': '0px',
          '-webkit-text-stroke-color': theme('colors.white'),
        },
        '.animation-spinning': {
          animation: 'spinning 1s infinite linear',
        },
        '.underline-red': {
          'text-decoration': 'underline',
          'text-decoration-color': '#F95858',
          'text-decoration-thickness': '1px',
        },
        '.underline-white': {
          'text-decoration': 'underline',
          'text-decoration-color': '#FFF',
          'text-decoration-thickness': '1px',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover', 'group-hover'])
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'node_modules/tv-*/**/*.vue',
      'client/components/**/*.vue',
      'client/layouts/**/*.vue',
      'client/pages/**/*.vue',
      'client/plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
