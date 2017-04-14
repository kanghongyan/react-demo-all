import React from 'react'
import { fromJS } from 'immutable'

import Tip from '../components/Tip'

// import '../util/compare'
// import '../util/useSImmutable'

class Page4 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lucy',
      pet: fromJS({
        type: 'cat',
        color: 'red',
      }),
      data: 'test'
    };
    
  }
  
  componentDidMount() {
    // eslint-disable-next-line
    $.ajax({
      url: './mock/data.json'
    }).done(function (ret) {
      console.log(ret)
    })
  }
  
  componentDidUpdate() {
    console.log('did update page4');
  }
  
  change() {
    this.setState({
      name: this.refs.name.value,
      pet: this.state.pet
        .set('color', this.refs.petColor.value)
        .set('type', this.refs.petType.value),
      // data: 'new test'
    });
    
  }
  
  render() {
    const name = this.state.name;
    const petC = this.state.pet.getIn(['color']);
    const petT = this.state.pet.getIn(['type']);
    return (
      <div>
        <strong>with PureComponent and seamless-immutable</strong>
        <div>{name}'s pet is a {petC} {petT}.</div>
        <hr/>
        <p>
          name:
          <input type="text" ref="name" defaultValue={name}/>
        </p>
        <p>
          pet color:
          <input type="text" ref="petColor" defaultValue={petC}/>
        </p>
        <p>
          pet type:
          <input type="text" ref="petType" defaultValue={petT}/>
        </p>
        <button onClick={() => this.change()}>Change</button>
        
        
        <Tip data={ this.state.data }/>
      </div>
    );
  }
}

export default Page4