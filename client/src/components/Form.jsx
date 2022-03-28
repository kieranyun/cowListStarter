import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    console.log('sending this to addCow:', this.state)
    this.props.addCow(this.state)
    this.setState({
      name: '',
      description: '',
    })
  }

  render() {
    return (
      <div>
        <input type="text" id="name" placeholder="Moo might this be?" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
        <input type="text" id="description" placeholder="tell us about this intreging bovine specimen" value = {this.state.description} onChange={this.handleChange.bind(this)}></input>
        <button onClick={this.handleClick.bind(this)}>submit</button>
      </div>
    )
  }
}

export default Form;