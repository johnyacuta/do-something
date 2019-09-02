import React, { Component } from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';

// TODO: Break out components like Search, Result, etc.

const Result = ({results}) => {
  return results.map(r => <div key={r}>{r}</div>);
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: 0,
      results: []
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.getReps = this.getReps.bind(this);
  }

  render() {
    const { results } = this.state;

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

        <Result results={results}></Result>
      </div>
    );
  }

  changeHandler = (event) => {
    this.setState({ zipcode: event.target.value });
  }

  getReps = (event) => {
    event.preventDefault();

    let url = process.env.REACT_APP_REP_ENDPOINT;
    let request = url + this.state.zipcode;

    fetch(request, { mode: 'no-cors', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(results => {
        console.log(results);
        this.setState({ results: [0, 1, 2, 3, 4, 5] });
      })
      .catch(error => {
        console.log('Request failed', error);
      });
  }
}

export default Home;