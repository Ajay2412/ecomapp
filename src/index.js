import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Component/App';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import About from './Pages/About';
import ProductDetail from './Pages/ProductDetail';


const router  = createBrowserRouter([
     {
        path:"/",
        element:<App />,
        errorElement:<Error />,
        

        children:[
            { index:true,
                element:<Home />},

                { path:"/contact",
                    element:<Contact />},

                    { path:"/about",
                        element:<About />},

                        { path:"/product",
                            element:<Product />}
                            ,
                            { path:"/products/:pid",
                                element:<ProductDetail />}
        ]
     }
     
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router = {router}/>
    
);


