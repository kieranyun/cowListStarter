import React from 'react';
import ReactDOM from 'react-dom';
import Cow from './Cow.jsx'

class List extends React.Component {
  constructor (props) {
    super(props);

  }

  render() {
    let cows = this.props.cows.map(cow => {
      return <Cow cow={cow} />
    })
    console.log(this.state)
    return (
      <div>
      <div>cows cows cows!!</div>
      <div>COWZ!!</div>
      <div>cowscows! wow a cow!</div>
      <div>heres the cows:</div>
      <div>{cows}</div>
      </div>
    )
  }
}

export default List;