import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import HomeScreen from "./pages/HomeScreen/HomeScreen";
import ProductScreen from "./pages/ProductScreen/ProductScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin">Signin</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-btn" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/product/:id" exact={true} component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>

        <footer className="footer">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
