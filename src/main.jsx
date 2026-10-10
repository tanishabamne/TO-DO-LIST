
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './store.jsx'
import { Provider } from 'react-redux'
import "./style.css";
createRoot(document.getElementById('root')).render(


      <div className="todo-container">

            <Provider store={store}>
                  <App />

            </Provider>


      </div>



)


