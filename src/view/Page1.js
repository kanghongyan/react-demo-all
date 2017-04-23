import React, {Component} from 'react';
// import seamlessImmutable from 'seamless-immutable'
// import { Map, List } from 'immutable'; 暂时不用

// const Immutable = seamlessImmutable.static;

class Page1 extends Component {
  constructor(props) {
    super(props);
    
    // default immutable
    // this.state = {
    //   data: Map({ count: 0, items: List() })
    // }
    
    // seamless-immutable
    // this.state = {
    //   data: Immutable({ count: 0 }),
    //   notInRender: 'test'
    // }
    
    // no immutable
    this.state = {
      data: 1
    }
  }
  
  componentWillMount() {
    console.log('will mount page1');
  }
  
  componentDidMount() {
    console.log(this)
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   let currentCount = Immutable.getIn(this.state.data, ['count']);
  //   let nextCount = Immutable.getIn(nextState.data, ['count']);
  //
  //   if (nextCount !== currentCount) {
  //     return true
  //   }
  //
  //   return false
  // }
  
  componentDidUpdate() {
    console.log('update')
  }
  
  changeState = () => {
    // this.setState(({data}) => ({
    //   data: data.update('count', v => v + 1)
    // }))
    
    // this.setState(({ data, notInRender }, props) => ({
    //   data: Immutable.update(data, 'count', v => v + 1),
    //   notInRender: 'test2'
    // }))
    
    // this.setState(({ data }) => ({
    //     // data: {
    //     //   count: 2
    //     // }
    //     no: 'ddd'
    //   }
    // ))
    
    this.setState({
      data: 3
    })
  };
  
  render() {
    
    //  let count = Immutable.getIn(this.state.data, ['count']);
    // let count = this.state.data.count;
    
    return (
      <div className="App">
        <p className="App-intro">
          this is page 1
          <a onClick={ this.changeState }>change state</a>
          <span>444</span>
        </p>
        { this.props.children }
      </div>
    );
  }
}

export default Page1;
