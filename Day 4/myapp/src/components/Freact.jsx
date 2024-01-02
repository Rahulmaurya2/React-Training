import React, { useState } from "react";

import "./freact.css";

function Freact() {
  const [count, setCount] = useState(1);

  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Click to count {count} </h1>
      </div>
      <div>
        <button className="btn-1" onClick={() => setCount(count + 1)}>
          Add Count
        </button>
        <button className="btn-1 btn-2" onClick={removeCount}>
          {" "}
          Remove Count
        </button>
      </div>
    </div>
  );
}

export default Freact;

// import React, { Component } from "react";

// class Counter extends Component {
//   // Initialize the state with a count property
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   // Define a method to increment the count by one
//   incrementCount = () => {
//     // Use setState() to update the state with a new count
//     // Pass a function that returns an object with the new count
//     // based on the previous state
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   // Render the component with the count and a button
//   render() {
//     return (
//       <div>
//         <p>The current count is {this.state.count}</p>
//         <button onClick={this.incrementCount}>+1</button>
//       </div>
//     );
//   }
// }

// export default Counter;
