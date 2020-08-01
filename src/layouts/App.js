import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Page from './Page'
import Navigation from './Navigation'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app__header">
          {<Header />}
        </header>
        <main className="app__main">
          <aside className="main__nav">
            {<Navigation />}
          </aside>
          <section className='main__page'>
            {<Page />}
          </section>
        </main>
        <footer className="app_footer">
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
