/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      yekan: ['IranYekan', 'tahoma'],
      yekanBold: ['IranYekanBold', 'tahoma'],
      crimson: ['crimson Pro', 'serif'],
    },
    extend: {
      colors: {
        'wallpaper' : '#000000',
        'header': 'rgba(0,0,0,0.8)',
        'menu':{
          'wallpaper': '#000000',
          'border': '#B903CB',
          'hover': 'rgba(185, 3, 203, 0.2)',
      },
        // 'item': {
        //   wallpaper: '#181C30',
        //   textLight: '#666e93',
        //   textDark: '#494f70',
        // },
        'btn': {
          wallpaper: '#fff',
          hover: '#111',
          text: '#ffffff'
        },
        'link': {
          primary: 'white',
          hover: '#B903CB'
        },
        // menu: {
        //   hover: '#3b4164',
        //   wallpaper: '#272D49',
        //   border: '#3b4164'
        // }
      },
      backgroundImage: {
        'wallpaper-main': "url('../assets/temps/images/main.jpg')",
        'rectangle-platform': "url('../assets/images/platform-rectangle.png')",
        'rectangle-platform-active': "url('../assets/images/platform-rectangle-active.png')",
        'gradiant-radial': "radial-gradient(circle, rgba(189,14,205,0.245) 0%, rgba(249,219,252,0) 50%)"
        // 'download-box': "url('../assets/images/download-box.png')",
        // 'global': "url('../assets/images/global.png')",
      },
      backgroundPosition: {
        // 'right-2/3': 'right 70%',
        // 'left-2/3': 'left 70%',
      },
      width: {
        // '100': '26rem',
      },

    },
  },
  plugins: [],
}
