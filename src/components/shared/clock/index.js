import React, { Component } from 'react';

import './clock.css';

class ClockComponent extends Component {
  constructor(props) {
    super(props);
    
    const initialTimerState = {
      minutes: props.totalTime - 1,
      mileseconds: 1000,
      seconds: 59,
    }

    this.state = {
      ...initialTimerState,
      timeOverflowCSSClass: 'clock',
    };

    this.initialState = initialTimerState;

    this.binder('pause');
    this.binder('play');
    this.binder('reset');
  }

  binder(action) {
    this[action] = this[action].bind(this);
  }

  reset() {
    this.setState({
      ...this.initialState,
    });
  }

  play() {
    this.intervalSeconds = setInterval(() => this.tickWithReset('seconds', 59), 1000);
    this.intervalMinutes = setInterval(() => this.tickMinutes(), 60000);
    this.intervalMileseconds = setInterval(() => this.tickWithReset('mileseconds', 999), 0);
  }

  pause() {
    Object.keys(this).filter(item => !item.search('interval'))
      .forEach(item => clearInterval(this[item]))
  }

  tickUnit(unit, initialValue) {
    return unit !== 0 ? unit - 1 : (unit = initialValue);
  }

  tickWithReset(unit, countDown) {
    this.setState(state => ({
      [unit]: this.tickUnit(state[unit], countDown),
    }));
  }

  tickMinutes() {
    this.setState(state => {
      if (state.minutes < 0) {
        state.timeOverflowCSSClass = 'clock overflow-time';
      }

      return {
        minutes: state.minutes - 1,
      };
    });
  }

  formatExibitionNumber(num, size) {
    return num.toString().padStart(size, '0');
  }

  componentDidMount() {
    this.play();
  }

  render() {
    return (<div className={ this.state.timeOverflowCSSClass }>
      <span>{ this.formatExibitionNumber(this.state.minutes, 2) }:</span>
      <span>{ this.formatExibitionNumber(this.state.seconds, 2) }:</span>
      <span>{ this.formatExibitionNumber(this.state.mileseconds, 4) }</span>
    </div>)
  }
}

export default ClockComponent;
