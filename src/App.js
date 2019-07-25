import React from 'react';
// pages
import MainPage from './pages/MainPage';

import './style/style.scss'

function App() {
  return (

    <div className='app container'>
        <div className='row align-items-center'>
          <div className='col'>
            <MainPage />
        </div>
      </div>
    </div>

  );
}

export default App;
