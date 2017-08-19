import React, { Component } from 'react';

export class Welcome extends Component {

  constructor(props) {
    super(props);
    const guestname = this.getGuestName();
    this.state = {
      name: guestname || 'Guest',
      submittedName: guestname,
    };
  }

  setGuestName = (val) => {
    localStorage.guestname = val;
  };

  getGuestName = () => localStorage.guestname;

  handleNameInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  submitName = () => {
    this.setGuestName(this.state.name);
    this.setState({
      submittedName: true,
    });
  }

  clearName = () => {
    this.setState({
      submittedName: false,
      name: '',
    });
  }

  render() {
    if (this.state.submittedName && this.state.name) {
      return (
        <div className={this.props.className} style={this.props.style}>
          <h2>
            Welcome {this.state.name}!
          </h2>
          <button onClick={this.clearName}>
            Not {this.state.name}? &nbsp;
            Click here.
          </button>
        </div>
      );
    }
    return (
      <div className={this.props.className} style={this.props.style}>
        What is your name?
        <input type="text" onChange={this.handleNameInput} />
        <button type="button" onClick={this.submitName}>
          Submit Name
        </button>
      </div>
    );
  }
}
