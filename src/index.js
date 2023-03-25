import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

function App() {
  return (
    <div>
      <h2>This is a flask and react boilerplate</h2>
      <h2>We use esbuild as a bundler as it is super fast</h2>
    </div>
  )
}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);