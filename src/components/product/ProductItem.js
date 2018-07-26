import React,{Component} from "react";

class ProductItem extends Component{
    constructor(props){
        super(props);
        console.log('con:'+props.productname);
    }
    render(){
        const {productname,unitprice} = this.props;
        return (
        <div>
            <p>{productname}</p>
            <p>{unitprice}</p>
        </div>
        )
    }
}
export default ProductItem;