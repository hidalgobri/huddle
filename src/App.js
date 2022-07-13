import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import content from './content';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {

  const mediaQuery = {
    mobile: '688px',
    tablet: '992px',
  }

  const cards = content.map(item => {
    return <Card 
      key= {item.id}
      id = {item.id}
      title = {item.title}
      text = {item.body}
      image = {item.image}
    />
  })

  return (
    <ThemeProvider theme={mediaQuery}>
      <>
      <Header/>
      <Hero/>
      {cards}
      <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
