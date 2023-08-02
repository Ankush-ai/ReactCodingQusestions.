import React,{Component} from 'react';
class CounterClass extends Component {
    constructor(props){
       super(props);
        this.state={
            count:0,
        }
       }

       increment=()=>{
        this.setState({count:this.state.count+1})
       }

       deccrementt=()=>{
        this.setState({count:this.state.count-1})
       }

       render(){
        return(
            <>

            <h3>Counter:{this.state.count}</h3>
            <button onCLick={this.increment}>Increment</button>
            <button onCLick={this.deccrementt}>Deccrement</button>
            
            </>
            
        );
       }
    };

    export default CounterClass;
