import React from "react";
import { connect } from "react-redux";
import { activateCredo, closeCredo } from "./action";

function App(props) {
  console.log(props);
  return (
    <div>
      <h1> {props.credo.title || "Hello World!"} </h1>

      {props.credo.title ? (
        <button onClick={props.closeCredo}> Exit Geod </button>
      ) : (
        <button
          onClick={() => props.activateCredo({ title: "I am a geo dude!" })}
        >
          Click Me!
        </button>
      )}
    </div>
  );
}
const mapStateToProps = state => ({
  credo: state.credo
});
const mapDispatchToProps = {
  activateCredo,
  closeCredo
};
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default AppContainer;
