import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDksPW1h41xcv_eDOs7u8vzHLRbSPSRAXs';

// create a new component
// produces html

const App = () => {
  return <div>Hi!</div>;
}


// Take this component's generated HTML and put it on the page in the DOM
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
