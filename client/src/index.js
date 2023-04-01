import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './reset.css'
import App from './App';
let titlePage  = "Main Page";
const root = ReactDOM.createRoot(document.getElementById('root'));
let initialStore = [
  {
      text: "Note 1",
      theme: "orange"
  },
  {
    text: "Note 2",
      theme: "green"
  },
  {
    text: "Note 3",
      theme: "red"
  }
]
const rerender = (notesStore) => {

root.render(
  <div>
<App 
notesStore = {notesStore}
rerender = {rerender}
/>
  </div>
);
}

rerender(initialStore);
reportWebVitals();