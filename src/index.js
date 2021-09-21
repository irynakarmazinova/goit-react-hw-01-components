import React from 'react'; //-если есть jsx, реакт в компоненте не нужен(в файлике где он используется)
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

//<React.StrictMode> - оборачивает приложение в строгий режим
