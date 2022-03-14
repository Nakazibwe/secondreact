import React, { Component } from "react";
class Counter extends Component {
 
  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>No TAGS</p>;
  //   }
  //   return (
  //     // <ul>
  //     //   {this.state.tags.map((tag) => (
  //     //     <li key={tag}>{tag}</li>
  //     //   ))}
  //     // </ul>
  //   );
  //}
  formatCount(){
      const {value} = this.props.counter;
      return value === 0 ? 'Zero': value
  };
  styles ={
      fontSize: 20,
      fontWeight: 'bold'
  }
  getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
      return classes;
  }
//   constructor(){
//       super();
//      this.handleIncrement =  this.handleIncrement.bind(this)
//   }
componentDidUpdate(prevProps,prevState){
  console.log('previousProps',prevProps);
  console.log('previousState',prevState);
  if(prevProps.counter.value !== this.props.counter.value){
    //Ajax call and get new data from the server.

  }
}
componentWillUnmount(){
  console.log('Counter -- Unmount')
}
  render() {
    console.log('Single Counter -- Rendered');
    return (
      <div>
        {/* <img src={this.state.imgUrl} alt= "Random"  /> */}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick= {()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        {/* <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}
        {/* {this.renderTags()} */}
        <button 
        onClick = {()=> this.props.onDelete(this.props.counter.id)}
        className="btn btn-danger btn-sm m-2">
          Delete
          </button>
      </div>
    );
  }
}

export default Counter;
