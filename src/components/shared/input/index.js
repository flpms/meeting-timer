import React, { Component } from 'react';
import './input.css';

class InputTextContainer extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      value: '', 
      hoverState: 'label'
    };
    
    this.onChange = this.onChange.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onChange(key, event) {
    this.setState({ value: event.target.value });
    this.props.onChange(key, event.target.value);
  }

  onMouseEnter() {
    this.setState({ hoverState: 'label script-label-hover' });
  }

  onMouseLeave() {
    this.setState({ hoverState: 'label' });
  }

  render() {
    return (
      <div className="input">
        <label className={ this.state.hoverState }
           htmlFor={this.props.keyId}>{this.props.label}</label>
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