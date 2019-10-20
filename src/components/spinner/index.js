import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return(
    promiseInProgress && (
      <div className="spinner">
        <Loader type="ThreeDots" color="#1E90FF" height="100" width="100" />
      </div>
    )
  );
};

export default Spinner;