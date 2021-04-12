import React, { Component } from 'react';
import './App.css';
import LoginForm from './pages/FormLogin/FormLogin';
import { Notification } from './components/Notification';
import RateBox from './components/RatingBar';
import RouterApp from './pages/Router/Router';
import { PostList } from './pages/Products/Service/post-list';
import ProductList from './pages/Products/ProductList';
import { CreateProduct } from './pages/Products/ProductCreate';

export default class App extends Component {
  state = { value: 3 };
  render() {
    return (
      <div className="wrapper">
        {/* <PostList/> */}
        {/* <CreateProduct/> */}
        {/* <ProductList/> */}
        <RouterApp/>
        {/* 
        <Notification/>
        <div className="RatingBar">
          <h4>Rating Bar</h4>
          <RateBox
            value={this.state.value}
            onChange={value => this.setState({ value })}
          />
        </div> */}
        
      </div>
    );
  }
}
