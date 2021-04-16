import React from 'react';
import { Container, Header, Image} from 'semantic-ui-react';

const Home = () => {
    return (
        <div>
          <Container>
            <br/>
            <Header as='h1'>Home</Header>
           <p>Welcome to your virtual deckbox!</p>
           <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fantasywelt.de%2Fmedia%2Fimage%2Fproduct%2F56909%2Flg%2Fdeckbox-orange.jpg&f=1&nofb=1" />
          </Container>
        </div>
    )
}

export default Home;
