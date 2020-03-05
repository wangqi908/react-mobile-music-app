import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/fonts/iconfont.css';
import './assets/css/style.less';
import './assets/css/reset.css';
// 国际化
// import enUS from 'antd-mobile/lib/locale-provider/en_US';
// import { LocaleProvider } from 'antd-mobile';

// ReactDOM.render(
//   <LocaleProvider locale={enUS}>
//     <App />
//   </LocaleProvider>
//   , document.getElementById('root')
// );


ReactDOM.render(<App />, document.getElementById('root'));
