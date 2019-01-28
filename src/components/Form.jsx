import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleGetWeather}>
        <input type="text" name="City" placeholder="City..."/>
        <input type="text" name="Country" placeholder="Country..."/>

        <button>Get Weather</button>
      </form>
    );
  }
}


export default Form;