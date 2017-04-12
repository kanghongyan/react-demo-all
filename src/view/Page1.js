import React, {Component} from 'react';
import { Map, List } from 'immutable'
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

// @immutableRenderDecorator;
class Page1 extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: Map({ count: 0, items: List() })
    }
  }
  
  componentWillMount() {
    console.log('edn');
  }
  
  componentDidMount() {
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  
  changeState = () => {
    this.setState(({data}) => ({
      data: data.update('count', v => v + 1)
    }))
  };
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          this is page 1
          <a onClick={ this.changeState }>change state</a>
          <span>{ this.state.data.get('count') }</span>
        </p>
        { this.props.children }
      </div>
    );
  }
}

export default immutableRenderDecorator(Page1);
