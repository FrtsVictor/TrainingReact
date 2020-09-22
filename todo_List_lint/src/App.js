import React from 'react'; // sempre primeira linha pra usar o jsx
import Main from './component/Main';

import './App.css';

// functions without state return jsx
// components stateful are classes and need method render
export default function App() {
  return (
    <Main />
  );
}
