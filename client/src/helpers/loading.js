import React, { Fragment } from 'react';

export const showLoading = () => (
  <Fragment>
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </Fragment>
);
