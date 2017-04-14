import React from 'react'

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lucy',
      pet: {
        type: 'cat',
        color: 'red',
      }
    };
  }
  
  componentDidUpdate() {
    console.log('did update');
  }
  
  change() {
    this.setState({
      name: this.refs.name.value,
      // pet: {
      //   color: this.refs.petColor.value,
      //   type: this.refs.petType.value
      // }
    });
    
  }
  
  render() {
    const name = this.state.name;
    // const petC = this.state.pet.color;
    // const petT = this.state.pet.type;
    const petC = 1;
    const petT = 2;
    return (
      <div>
        <strong>with immutableRenderDecorator</strong>
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
      </div>
    );
  }
}

export default Page2