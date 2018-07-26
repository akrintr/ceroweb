import React from "react";

const ProductItem = (props) =>{
    const {productname,unitprice} = props;
    return (
        <div>
            <p>{productname}</p>
            <p>{unitprice}</p>
        </div>


    )
}

export default ProductItem;