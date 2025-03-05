/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
      },
      colors: {
        'eerie-black': '#212121',
        'black-1000': '#343541',
        'jet': '#343541',
        'gray-alpha': 'rgba(0,0,0, .64)',
        'gray-1000': '#F6F6F6',
        'gray-2000': 'rgba(0, 0, 0, 0.5)',
        'gray-3000': 'rgba(243, 243, 243, 1)',
        'gray-4000': '#949494',
        'gray-5000': '#BBBBBB',
        'gray-6000': '#757575',
        'red-1000': 'rgb(254, 202, 202)',
        'red-2000': '#F44336',
        'red-3000': '#621B16',
        'blue-1000': '#7D54D1',
        'blue-2000': '#002B49',
        'blue-3000': '#4B02E2',
        'purple-30': '#7D54D1',
        'purple-3000': 'rgb(230,222,247)',
        'blue-4000': 'rgba(0, 125, 255, 0.36)',
        'blue-5000': 'rgba(0, 125, 255)',
        'green-2000': '#0FFF50',
        'light-gray': '#edeef0',
        'white-3000': '#ffffff',
        'just-black': '#00000',
        'purple-taupe': '#464152',
        'dove-gray': '#6c6c6c',
        'silver': '#c4c4c4',
        'rainy-gray': '#a4a4a4',
        'raisin-black': '#222327',
        'chinese-black': '#161616',
        'chinese-silver': '#CDCDCD',
        'dark-charcoal': '#2F3036',
        'bright-gray': '#ECECF1',
        'outer-space': '#444654',
        'gun-metal': '#2E303E',
        'sonic-silver': '#747474',
        'soap': '#D8CCF1',
        'independence': '#54546D',
        'philippine-yellow': '#FFC700',
        'bright-gray': '#EBEBEB',
        
        // New semantically named colors for UI elements
        'chinese-white': '#e0e0e0',
        'dark-gray': '#aaaaaa',
        'dim-gray': '#6A6A6A',
        'cultured': '#f4f4f4',
        'charleston-green': '#2b2c31',
        'charleston-green-2' : '#26272e',
        'grey': '#7e7e7e',
        'lotion': '#fbfbfb',
        'platinum': '#e6e6e6',
        'eerie-black-2': '#191919',
        'light-silver': '#D9D9D9',
        'carbon': '#2E2E2E',
        'onyx':'#35363B',

        // New colors for edit buttons
        'purple-hover': '#6C4AB0', //royal purple
        'rich-black': '#0F1419', // chinese-black-2
        'light-gray-hover': '#D9DCDE', //gainsboro
        'charcoal': '#35383C',//onyx 2
        'philippine-grey': '#929292',
        'charcoal-grey':'#53545D',
        'rosso-corsa': '#D30000',
        'apple-green': '#4CAF50',
        'medium-purple': '#8d66dd',
        'slate-blue': '#6f5fca',
        'old-silver': '#848484',
        'arsenic': '#4D4E58',
        'light-gainsboro': '#d7D7D7',
        'raisin-black-light': '#18181B',
        'gunmetal': '#32333B',
        'sonic-silver-light': '#7f7f82'
      },
    },
  },
  plugins: [],
};
