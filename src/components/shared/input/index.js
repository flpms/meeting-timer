import React, { Component } from 'react';
import './input.css';

class InputTextContainer extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      value: '', 
      hover: false,
    };
    
    this.binder('onChange');
    this.binder('onMouseEnter');
    this.binder('onMouseLeave');
  }

  binder(action) {
    this[action] = this[action].bind(this);
  }

  onChange(key, event) {
    this.setState({ value: event.target.value });
    this.props.onChange(key, event.target.value);
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    let className = 'input';

    if (this.state.hover) {
      className += ' add-label-effect';
    }

    return (
      <div className={className}>
        <label htmlFor={this.props.keyId}>
          {this.props.label}
        </label>
        <input className="text"
          type="text"
          id={this.props.keyId }
          placeholder={ this.props.placeholder }
          onChange={(e) => this.onChange(this.props.keyId, e) }
          onMouseEnter={ this.onMouseEnter }
          onMouseLeave={ this.onMouseLeave }
          value={ this.state.value } />
      </div>)
  }
}

export default InputTextContainer;