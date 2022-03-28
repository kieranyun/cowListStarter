import React from 'react';
import ReactDOM from 'react-dom';

class Cow extends React.Component {
  constructor (props) {
    super(props);
    this.state ={}
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>Introducing: {this.props.cow.name}!!!!!</div>
        <div>This big beauty is {this.props.cow.description}</div>
      </div>
    )
  }
}

export default Cow;