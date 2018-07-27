import React,{Component} from "react";
import ProductList from "../product/ProductList";
import Calculator from "../monitor/Calculator";

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state = {totalPrice:0,orders:[]};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
    }

    addOrder(p){
        let findOrder = this.state.orders.find(o => o.product.productId == p.productId);
        if (findOrder){
            findOrder.quantity++;
        } else{
            this.state.orders.push({product:p, quantity:1});
        }
        const totalPrice =  this.state.totalPrice + parseInt( p.unitPrice) ;
        this.setState({totalPrice : totalPrice,orders:this.state.orders});

        console.log(p.productName);
    }

    delOrder(p){
        let findOrder = this.state.orders.find(o => o.product.productId == p.productId);

        console.log(findOrder);
        
        let remainOrder = this.state.orders.filter(o => o.product.productId != findOrder.product.productId);

        const totalPrice =  this.state.totalPrice - ( parseInt( findOrder.product.unitPrice) * parseInt( findOrder.quantity));
        this.setState({totalPrice : totalPrice,orders:remainOrder});

        console.log(remainOrder);

    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} />
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Monitor;