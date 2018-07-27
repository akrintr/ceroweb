import React,{Component} from "react";

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
        

        console.log('constructor');
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
        console.log('mount');

    }

    componentDidUpdate(){
        console.log('update');
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
        console.log('unmount');
    }

    tick(){
        this.setState({date : new Date()});
    }

    render(){
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }

}

export default Header;