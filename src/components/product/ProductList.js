import React,{Component} from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component{
    
   
    showProduct(){
            return this.props.products && this.props.products.map(p=>(
                <ProductItem key={p.productId} product={p} onAddOrder={this.props.onAddOrder} />
            ))
    }

    render(){

        return (
            <div className="row">
                {this.showProduct()}
            </div>
        );
    }

}

export default ProductList;