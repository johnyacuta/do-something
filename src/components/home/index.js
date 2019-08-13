import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <Jumbotron>
          <h1>
            Welcome!
          </h1>

          <p>
            It is time to do something.
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;