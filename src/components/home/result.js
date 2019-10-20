import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Result = ({results}) => {
  const columns = [
    {
      Header: 'Candidate Name',
      accessor: 'candidate_name'
    },
    {
      Header: 'NRA Contribution Recieved',
      accessor: 'nra_contribution_received',
      Cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'USD' }).format(props.value)
    },
    {
      Header: 'Party',
      accessor: 'party'
    },
    {
      Header: 'State',
      accessor: 'state'
    },
    {
      Header: 'ZIP Code',
      accessor: 'zip_code'
    }
  ];

  if (results) {
    return(
      <ReactTable data={results} columns={columns} />
    );
  }

  return(
    <div>
      <h2>No results...</h2>
    </div>
  );
}

export default Result;