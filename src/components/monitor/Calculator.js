import React,{Component} from "react";

class Calculator extends Component{
    
    constructor(props){
        super(props);
        
    }

    showOrders(orders){
        if(!orders||orders.length == 0){
            return <li className="text-right text-muted title">No orders</li>
        }else{
            return orders.map(o=>{
                return (
                    <li key={o.product.productId} className="text-right text-success title">
                            {o.product.productName} x {o.quantity}} = {o.product.unitPrice*o.quantity}
                            <button className="btn btn-right" onClick={()=>this.props.onDelOrder(o.product) }>X</button>
                    </li>
                )
            })
        }
    }
    
    render(){

        const {totalPrice,orders} = this.props;


        return (
            <div>
                <h1 className="text-right">{this.props.totalPrice}</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title"> Confirm </button>
                <button className="btn btn-block btn-secondary title"> Cancel </button>
            </div>
        );
    }

}

export default Calculator;