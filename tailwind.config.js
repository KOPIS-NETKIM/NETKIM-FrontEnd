/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { max: '640px' },
      desktop: { min: '641px' },
    },
    backgroundImage: {
      main: 'url(./assets/img/MainFrame.webp)',
    },
    fontFamily: {
      pretendard: ['Pretendard'],
    },
    extend: {
      backgroundImage: {
        'send-gradient': 'linear-gradient(to bottom, #FFC9C0 17%, #FFFFFF 83%)',
      },
      boxShadow: {
        toggle: '0px 2px 12px 0px rgba(0,0,0,0.07)',
        editShadow: '0px 12px 24px 0px rgba(13,16,45,0.1)',
        editShadow2: '0px 25px 50px -12px rgba(13,16,45,0.1)',
        button: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        button_hover: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      },
      colors: {
        // 토글 셀렉
        'toggle-select': '#EAECEE',
        // 메인 컬러 조합
        'peach-header': 'rgba(255,190,152,0.37)',
        'peach': '#FFB2A5',
        'peach-light': 'rgba(255,178,165,0.7)',
        'peach-thick': '#F97272',
        'peach-text': '#F47C7C',
        'peach-semiThick': 'rgba(249,114,114,0.68)',
        // 글 쓰기 컬러
        'basic': '#F7F3ED',
        'text-color': '#64422E',
      },
      borderColor: {
        'gray-border': 'var(--grey-300, #eaecee)',
      },
      borderWidth: {
        'border-1': '1px',
      },
    },
  },
  plugins: [],
  mode: 'jit',
};
