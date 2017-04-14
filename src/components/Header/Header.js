/**
 * Created by khongyan on 2017/3/27.
 */
import React, {Component} from 'react';
// import logo from './logo.svg';
import './Header.scss';

class App extends Component {
  componentWillMount() {
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>header</h2>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;