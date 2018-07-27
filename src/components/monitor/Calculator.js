import React,{Component} from "react";

class Calculator extends Component{
    
    constructor(props){
        super(props);
        
    }
    
    render(){
        return (
            <div>
                <h1 className="text-right">340.0</h1>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right title">
                        Pingsu x 1 = 200
                        <button className="btn btn-right">X</button>
                    </li>
                    <li className="text-right title">
                        Pingsu x 1 = 200
                        <button className="btn btn-right">X</button>
                    </li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title"> Confirm </button>
                <button className="btn btn-block btn-secondary title"> Cancel </button>
            </div>
        );
    }

}

export default Calculator;