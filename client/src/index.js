import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Form from './components/Form.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      data: [],
    }
  }

  componentDidMount() {
    axios.get('/api/cows')
    .then(res => {
      this.setState({
        data: res.data
      })
    })
    .catch(err => console.log(err))
  }

  addCow(data) {
    axios.post('/api/cows', {data})
    .then(() => {return axios.get('/api/cows')})
    .then(res => {
      this.setState({
        data: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>A LIST OF THE COWS!</h1>
        <div>Got more cows for us?
          <Form addCow={this.addCow.bind(this)} />
        </div>
        <div><List cows={this.state.data} /></div>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));