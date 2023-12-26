import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Bag from './components/BagItem.jsx';

import {Provider} from "react-redux"
import store from './store/store.js';

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
},

 {
      path:"/bag",element:<Bag/>
 },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
  </React.StrictMode>,
)
