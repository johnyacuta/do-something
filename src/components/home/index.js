import React, { Component } from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { zipcode: 0 };
  }

  render() {
    return(
      <div className="Home">
        <Jumbotron>
          <h1>
            It is time to do something.
          </h1>

          <br></br>

          <p>
            Enter your zip code to see who your local representatives are and if
            they have received money from the NRA, and if so how much.
          </p>

          <br></br>
          
          <Form onSubmit={this.getReps}>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="Enter zip code" onChange={this.changeHandler}/>
              <br></br>
              <Button type="submit">Search</Button>
            </Form.Group>
          </Form>
        </Jumbotron>
      </div>
    );
  }

  changeHandler = (event) => {
    this.setState({zipcode: event.target.value});
  }

  getReps = (event) => {
    event.preventDefault();

    let url = process.env.REACT_APP_REP_ENDPOINT;
    let request = url + this.state.zipcode;
    
    fetch(request, { mode: 'no-cors' })
      .then(function(response) {
        console.log(response); 
      })
      .catch(function(error) {  
        console.log('Request failed', error)  
      });
  }
}

export default Home;