import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';

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

export default Result;