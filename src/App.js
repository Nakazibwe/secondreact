/* eslint-disable no-undef */
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";
import './App.css'

class App extends Component{
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  constructor(){
    super();
    console.log('App - Constructor');
    // this.state = this.props.something;
    
  }
  componentDidMount(){
    //Ajax Call.
    console.log('App - Mounted');
  }
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };
  render(){
    console.log('App - Rendered')
    return (
      <React.Fragment>
        <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
            <main className="container">
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </main>
      </React.Fragment>
          
    );
  }
 
    
  
  
 
}

export default App;
