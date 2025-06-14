import React from 'react';

import './App.css';
import './styles.css'

import DynamicCV from './components/DynamicCV'

function App() {
  return (
    <React.Fragment>
      <header className='py-1 text-center'>
        <h1>Dynamic Curriculum Vitae</h1>
      </header>

      <main className='py-1'>
        <DynamicCV />
      </main>

      <footer></footer>
    </React.Fragment>
  );
}

export default App;
