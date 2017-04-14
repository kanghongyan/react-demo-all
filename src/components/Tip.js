import React from 'react'

class Tip extends React.Component {
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps tip')
  }
  
  componentDidUpdate() {
    console.log('did update tip');
  
  }
  
  render() {
    const {data} = this.props;
    return (
      <div>{ data }</div>
    )
  }
}

export default Tip