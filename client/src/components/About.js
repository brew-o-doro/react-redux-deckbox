import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const About = () => {
    return (
        <div>
          <Container>
            <br/>
            <Header as='h1'>About</Header>

            <p>React Deckbox is an app with a Javascript frontend and Ruby on Rails API backend to create a collection of cards to keep track of your inventory or perspective card pulls with the Scratchpad feature! </p>

          </Container>
        </div>
    )
}

export default About;
