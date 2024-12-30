import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function App(){
    
    return (
       <>
        <header>
            <nav>
                <h2>MyShop</h2>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/product">Product</NavLink>
            </nav>
            <main>
              <Outlet />
            </main>
        </header>
       </>
    );
}
export default App;