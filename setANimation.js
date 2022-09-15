import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { useContext, useRef } from 'react/cjs/react.production.min';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Progress></Progress>
    </div>
  );
}
export class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      progressBar: []
    }
  }
  renderProgressBar = () => {
    return this.state.progressBar.map(m => {
      return <div id={m.id} style={{ width: m.width, background: 'red' }}>{m.id}</div>
    })
  }
  addProgressBar = () => {
    let _progressBar = this.state.progressBar;
    this.count++;
    _progressBar.push({ id: this.count, width: 0 });
    this.setState({ progressBar: _progressBar }, () => {
      this.setAnimation(this.count);
    });
  }
  setAnimation = (domID) => {
    // setInterval(() => {
    //   let pb = this.state.progressBar;
    //   let _pb = pb.find(m => m.id == domID && m.width < 1000);
    //   if (_pb) {
    //     _pb.width = _pb.width + 5;
    //     this.setAnimation(domID);
    //   }
    //   this.setState({progressBar: pb });
    // },1000)
    // setInterval(() => {
    //   this.setState((prevState) => {
    //     let pb = prevState.progressBar;
    //     let _pb = pb.find(m => m.id == domID && m.width < 1000);
    //     if (_pb) {
    //       _pb.width = _pb.width + 5;
    //       this.setAnimation(domID);
    //     }
    //     return { progressBar: pb }
    //   });

    // },1000)
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.addProgressBar}>Click here to add Progress bar</button>
          {
            this.renderProgressBar()
          }
        </div>
      </React.Fragment>
    );
  }
}
export function Counter() {
  const [progressBar, setProgressBar] = useState([]);
  const [count, setCount] = useState(0);
  const addNewProgressBar = () => {
    setCount(count + 1);
    let _progressBar = progressBar;
    _progressBar.push(count + 1);
    setProgressBar(_progressBar);
    let _dom = document.getElementById(count + 1);
    displayAnimation(_dom)
    setTimeout(() => {
      setProgressBar((state) => {
        if (state.length) {
          state.splice(0, 1);
          return state;
        }
      })
    }, 5000);
  }
  const displayAnimation = (_dom) => {

  }
  const renderProgressBar = () => {
    return progressBar && progressBar.map(m => <div id={m}>Progress Bar No {m}</div>);
  }
  return (
    <React.Fragment>
      {renderProgressBar()}
      <button onClick={addNewProgressBar}>Click to ad new progress bar</button>
    </React.Fragment>
  );
}
export default App;
