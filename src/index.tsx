// 必要なモジュールをインポートします
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // スタイルシートのインポート
import App from './App'; // App コンポーネントのインポート
import reportWebVitals from './reportWebVitals';

// ReactコンポーネントをルートDOMノードにレンダリングします
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// （オプション）Web Vitalsのレポートを行います
reportWebVitals();
