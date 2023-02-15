import React from 'react';


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: this.props.brand,
      model: this.props.name,
      color: this.props.color,
      speed: this.props.speed,
      price: this.props.price,
      speednow: 0
    };
  }


  changeColor = (color) => {
      this.setState({
          ...this.state,
          color: color
      })
  }

  accelerate = () => {
      this.setState({
          ...this.state,
          speednow: this.state.speednow += 10
      })
  }

  brake = () => {
    if(this.state.speednow > 0) {
        this.setState({
            ...this.state,
            speednow: this.state.speednow -= 10
        })
    }
}



  render() {
    return (
      <div>
        <h3>Merk : {this.state.brand}</h3>
        <table>
          <tbody>
          <tr>
            <td>Nama</td>
            <td>:</td>
            <td>{this.state.model}</td>
        </tr>
        <tr>
            <td>Color</td>
            <td>:</td>
            <td>{this.state.color}</td>
        </tr>
        <tr>
            <td>Speed</td>
            <td>:</td>
            <td>{this.state.speed} KM / Jam</td>
        </tr>
        <tr>
            <td>Price</td>
            <td>:</td>
            <td>{this.state.price} JT</td>
        </tr>
        <tr>
            <td>Speed Now</td>
            <td>:</td>
            <td>{this.state.speednow}</td>
        </tr>
          </tbody>
        </table>

        <button onClick={() => this.accelerate()}>Accelerate</button>
        <button onClick={() => this.brake()}>Brake</button>
        <button onClick={() => this.changeColor('Hitam')}>Change Color to Hitam</button>
      </div>
    );
  }
}

export default Car