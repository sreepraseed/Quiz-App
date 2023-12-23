// Main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Main = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

export default Main;

