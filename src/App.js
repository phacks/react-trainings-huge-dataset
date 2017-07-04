import React, { Component } from 'react';
import './App.css';

let data = [];
class App extends Component {
  constructor(props) {
    super(props);
    data = this.props.data;
  }

  /**
   * Todo: change the `render` method to display all 15,000 elements.
   */
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
						<li key={data[0].id} className="App-list-item">
							<div className="App-list-item-icon" style={{backgroundColor: data[0].color}}>{data[0].name[0].toUpperCase()}</div>
							<p>{data[0].name} (#{data[0].id})</p>
						</li>
					</ul>
				</div>
      </div>
    );
  }
}

export default App;
