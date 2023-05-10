import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #191919;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'CustomFont', sans-serif;
  font-size: 3rem;
  color: #ffffff;
  text-shadow: 2px 2px 5px #800092;
`;

const CatImage = styled.img`
  width: 300px;
  filter: hue-rotate(200deg);
`;

const Description = styled.p`
  font-family: 'CustomFont', sans-serif;
  font-size: 1.2rem;
  color: #ffffff;
  max-width: 600px;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet</Title>
      {/* <CatImage src="./images/cat.png" alt="Cyber Cat" /> */}
      <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia arcu ex, eget eleifend est rutrum a. Pellentesque tellus eros, ultrices non pharetra et, luctus non metus. Aenean maximus lectus sem, iaculis tristique est vestibulum ut. Ut mollis, elit sit amet scelerisque commodo, velit odio lobortis eros, egestas imperdiet odio lectus eu nulla. Etiam mollis, sapien a posuere viverra, dui tellus viverra mauris, eu lobortis mi orci quis augue. Nulla tempus vel dolor sit amet tristique. Aliquam erat volutpat. Curabitur id gravida quam, vel hendrerit turpis. Phasellus lacinia ex ac euismod tincidunt. Donec tincidunt mattis congue. Donec vestibulum a mi nec luctus.
      </Description>
    </Container>
  );
};

export default Home;
