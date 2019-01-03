import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const valueContext = React.createContext();
function F1() {
  return (
    <div>
      F1,
      <F2 />
    </div>
  );
}
function F2() {
  return (
    <div>
      F2,
      <valueContext.Concumer>
        {value => <F3 value={value} />}
      </valueContext.Concumer>
    </div>
  );
}
function F3(props) {
  return <div>F3,{props.value}</div>;
}
function App() {
  return (
    <valueContext.Provider value="100">
      <F1 />
    </valueContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
