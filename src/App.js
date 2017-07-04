import React, { Component } from 'react';
import './App.css';

let data = [];
class App extends Component {
  constructor(props) {
    super(props);
    data = this.props.data;
  }

  rowRenderer(item) {
    return (
      <li key={item.id} className="App-list-item">
        <div className="App-list-item-icon" style={{backgroundColor: item.color}}>{item.name[0].toUpperCase()}</div>
        <p>{item.name} (#{item.id})</p>
      </li>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Rendering a long list in React</h2>
        </div>
        <p className="App-intro">
          {`The following list is ${data.length} items long`}
        </p>
        <div className="App-scroll-window">
					<ul className="App-list">
						{ data.map(item => this.rowRenderer(item)) }
					</ul>
				</div>
      </div>
    );
  }
}

export default App;
