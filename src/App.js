import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import content from './content';
import Card from './components/Card';

function App() {

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
    <>
      <Header/>
     <Hero/>
     {cards}
     <p>Hola</p> 
    </>
  );
}

export default App;
