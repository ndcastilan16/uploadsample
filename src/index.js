import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetList from './GetList';

import reportWebVitals from './reportWebVitals';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    ReactDOM.render(
      <React.StrictMode>
        <App data1 = {this.state.username} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  myChangeHandler = (event) => {

    var url = event.target.value;
    var page = url.substring(url.lastIndexOf('/'));
    console.log(page);

    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Sample Upload from google sheet</h1>
      <p>Enter google sheet key</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />    
      </form>
      
    );
    
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));