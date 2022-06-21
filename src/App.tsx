import React from 'react';
import logo from './logo.svg';
import './App.css';
import Feader from './first_header/first_header';
import Seader from './second_header/second_header';
import Slied from './slied/slied';
import Content0 from './content0/content0';
import Content1 from './content1/content1';
import Content2 from './content2/content2';
import Footer from './first_footer/first_footer';
import Sooter from './second_footer/second_footer';

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <section className="first_header">
          <Feader/>
        </section>
        <section className="second_header">
          <Seader/>
        </section>
      </header>
      <section className="slide">
          <Slied/>
      </section>
      <section className="content0">
          <Content0/>
      </section>
      <section className="content1">
          <Content1/>
      </section>
      <section className="content2">
          <Content2/>
      </section>
      <footer className="App_footer">
        <section className="first_footer">
          <Footer/>
        </section>
        <section className="second_footer">
          <Sooter/>
        </section>
      </footer>
    </div>
  );
}

export default App;
