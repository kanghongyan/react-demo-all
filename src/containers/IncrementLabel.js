import React from 'react'
import { connect } from 'react-redux'

import Increment from '../components/Increment'

class IncrementLabel extends React.PureComponent {
  render() {
    return (
      <div>
        <Increment amount={ this.props.amount }/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.get('amount')
  }
}

export default connect(
  mapStateToProps
)(IncrementLabel)