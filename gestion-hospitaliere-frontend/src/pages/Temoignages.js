import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Temoignages() {
  return (
    <Container id="temoignages" className="my-5">
      <h2>Témoignages</h2>
      <Carousel>
        <Carousel.Item>
          <p>"Excellente clinique avec un service très professionnel."</p>
          <footer>- John Doe</footer>
        </Carousel.Item>
        <Carousel.Item>
          <p>"Un accueil chaleureux et des soins de qualité."</p>
          <footer>- Jane Smith</footer>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Temoignages;
