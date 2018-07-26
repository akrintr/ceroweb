import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/product/ProductItem";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductItem productname="IPhone X" unitprice="45000" />
        <ProductItem productname="IPad Pro 10.5" unitprice="25000" />
        <ProductItem productname="IPad Mini" unitprice="19000" />
        <Footer company="Unique Plastic Industry" email="akrin_r@uniqueplastic.com" />
      </div>
    );
  }
}

export default App;
