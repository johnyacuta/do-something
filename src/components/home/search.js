import React from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';

const Search = (props) => {
  const {
    getReps,
    changeHandler
  } = props;

  return(
    <div className="Search">
      <Jumbotron>
          <h1>
            It is time to do something.
          </h1>

          <br></br>

          <p>
            Enter your ZIP Code to see who your local representatives are and if
            they have received money from the NRA, and if so how much.
          </p>

          <br></br>
          
          <Form onSubmit={getReps}>
            <Form.Group controlId="formSearch">
              <Form.Control type="text" placeholder="Search ZIP Code"
                onChange={changeHandler} />
            </Form.Group>
          </Form>
        </Jumbotron>
    </div>
  );
}

export default Search;