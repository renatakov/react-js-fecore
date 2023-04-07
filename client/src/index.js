import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './reset.css'
import App from './App';
let titlePage  = "Main Page";
const root = ReactDOM.createRoot(document.getElementById('root'));

  const initialStore = { 
    name: "Alex",
    avatar: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    description:"This is my page", 
    post: [
        {
            time:"12.03",
            text:"Hello World"
        }
    ]
  }

const rerender = (store) => {

root.render(
  <div>
<App 
store = {store}
rerender = {rerender}
/>
  </div>
);
}

rerender(initialStore);
reportWebVitals();