import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
      laps: [],
    };
    this.timer = null;
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timer = setInterval(() => {
        this.setState((prev) => ({ time: prev.time + 1 }));
      }, 1000);
    }
  };

  stopTimer = () => {
    this.setState({ isRunning: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({ isRunning: false, time: 0, laps: [] });
    clearInterval(this.timer);
  };

  addLap = () => {
    this.setState((prev) => ({ laps: [...prev.laps, prev.time] }));
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    return (
      <div className='text-3xl w-100 h-80 sp-4 flex items-center flex-col justify-center rounded-lg bg-sky-800 border-2 border-white'>
        <h1 className='text-white'>Stopwatch</h1>
        <h2 className='text-white'>{this.formatTime(this.state.time)}</h2>
        <div className='flex flex-row items-center justify-center gap-2 mt-4'>
          <button className='text-xl bg-sky-400 w-20 h-20 rounded-full' onClick={this.startTimer} disabled={this.state.isRunning}>Start</button>
          <button className='text-xl bg-sky-400 w-20 h-20 rounded-full' onClick={this.stopTimer} disabled={!this.state.isRunning}>Stop</button>
          <button className='text-xl bg-sky-400 w-20 h-20 rounded-full' onClick={this.resetTimer}>Reset</button>
          <button className='text-xl bg-green-400 w-20 h-20 rounded-full' onClick={this.addLap} disabled={!this.state.isRunning}>Lap</button>
        </div>
        <ul className='mt-4 text-white'>
          {this.state.laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {this.formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Stopwatch;
