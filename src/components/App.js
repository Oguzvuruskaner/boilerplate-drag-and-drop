import React, { Component, Fragment } from 'react';
import DraggableContainer from "./DraggableContainer";
import Dropzone from "./Dropzone";

class App extends Component {
  render() {
    return (
      <Fragment>
          <DraggableContainer/>
          <Dropzone/>
      </Fragment>
    );
  }
}

export default App;