import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './reset.css'
import App from './App';
let titlePage  = "Main Page";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
<h1>{titlePage}</h1>
<App />
  </div>
);


reportWebVitals();