import React from 'react';
import logo from './logo.svg';



import './style/base.scss';
import './style/header.scss';
import './style/main.scss';
import './style/footer.scss';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  return (
     
    <div className="App">
         <Header/>
         <main>
          <Main/>
         </main>
         <Footer/>
     </div>
  );
}

export default App;