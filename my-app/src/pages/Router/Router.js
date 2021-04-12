import './pages.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProductForm from "../FormAddProduct/FormAddProduct";
import LoginForm from "../FormLogin/FormLogin";
import RegisterForm from "../FormRegister/FormRegister";
import ProductList from '../Products/ProductList';
import { CreateProduct } from '../Products/ProductCreate';

export default function RouterApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="horizontal">
            <li className="active">
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/add_products">Add products</Link>
            </li>
            <li>
              <Link to="/product_list">Products List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add_products">
            <AddProduct />
          </Route>
          <Route path="/product_list">
            <ListProduct />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
  
}
function Login() {
  return <LoginForm/>;
}

function Register() {
  return <RegisterForm/>
}

function AddProduct() {
  return <CreateProduct/>;
}

function ListProduct() {
  return <ProductList/>
}