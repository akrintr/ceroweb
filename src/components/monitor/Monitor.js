import React,{Component} from "react";
import ProductList from "../product/ProductList";
import Calculator from "../monitor/Calculator";
import axios from "axios";

class Monitor extends Component{
    constructor(props){
        super(props);
        this.state = {totalPrice:0,orders:[],showAlert : false,alertMsg : ""};
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(p){
        let findOrder = this.state.orders.find(o => o.product.productId == p.productId);
        if (findOrder){
            findOrder.quantity++;
        } else{
            this.state.orders.push({product:p, quantity:1});
        }
        const totalPrice =  this.state.totalPrice + parseInt( p.unitPrice) ;
        this.setState({totalPrice : totalPrice,orders:this.state.orders,showAlert:false,alertMsg:""});

        //console.log(p.productName);
    }

    delOrder(p){
        let findOrder = this.state.orders.find(o => o.product.productId == p.productId);

        console.log(findOrder);
        
        let remainOrder = this.state.orders.filter(o => o.product.productId != findOrder.product.productId);

        const totalPrice =  this.state.totalPrice - ( parseInt( findOrder.product.unitPrice) * parseInt( findOrder.quantity));
        this.setState({totalPrice : totalPrice,orders:remainOrder});

        console.log(remainOrder);

    }

    cancelOrder(){
        this.setState({totalPrice:0,orders:[],showAlert:false,alertMsg:""});
    }

    confirmOrder(){
        const {totalPrice,orders} = this.state;

        //console.log('conf:'+totalPrice);
        //console.log('conf:'+ orders);
        if (orders && orders.length > 0){
            axios.post("http://localhost:3001/orders",{orderedDate : new Date(),totalPrice,orders})
            .then(res=>{
                this.setState({totalPrice:0,orders:[],showAlert:true,alertMsg:"Thank you for your order."});
            });
        } else {
            this.setState({showAlert:true,alertMsg:"Please choose your product."});
        }

    }

    render(){
        return (
            <div className="container-fluid">
                {this.state.showAlert &&
                <div className="alert alert-secondary text-right title">
                    {this.state.alertMsg}
                </div>
                }
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
                    </div>
                </div>
                
            </div>
        )
    }

}

export default Monitor;