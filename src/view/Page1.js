import React, {Component} from 'react';

class Page1 extends Component {
  componentWillMount() {
    console.log('edn');
  }
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          this is page 1
        </p>
        { this.props.children }
      </div>
    );
  }
}

export default Page1;
