import React, { Component } from 'react';
import { Jumbotron, Form, Button, Container, Row, Table } from 'react-bootstrap';

// TODO: Break out components like Search, Result, etc.

const Result = ({results}) => {
  return results.map(r => {
    return(
      <div className="Results" key={r.candidate_pcc_id}>
        <Container>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Candidate Name</th>
                  <th>NRA Contribution Recieved</th>
                  <th>Party</th>
                  <th>State</th>
                  <th>ZIP Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{r.candidate_name}</td>
                  <td>{r.nra_contribution_received}</td>
                  <td>{r.party}</td>
                  <td>{r.state}</td>
                  <td>{r.zip_code}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  });
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
              <Form.Control type="text" placeholder="Enter zip code"
                onChange={this.changeHandler} />
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

    fetch(request, { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        return response.clone().json();
      })
      .then(results => {
        console.log(results); // Temp
        this.setState({ results: results });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Home;