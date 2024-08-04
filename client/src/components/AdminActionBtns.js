import React from 'react';

const AdminActionBtns = () => (
  <div className="bg-light my-2">
    <div className="container">
      <div className="row pb-3">
        <div className="col-md-4 my-1">
          <button
            className="btn btn-primary btn-lg btn-block"
            data-toggle="modal"
            data-target="#addCategoryModal"
          >
            <i className="fas fa-plus"></i> Add Category
          </button>
        </div>

        <div className="col-md-4 my-1">
          <button
            className="btn btn-warning btn-lg btn-block"
            data-toggle="modal"
            data-target="#addFoodModal"
          >
            <i className="fas fa-plus"></i> Add Product
          </button>
        </div>

        <div className="col-md-4 my-1">
          <button className="btn btn-success btn-lg btn-block">
            <i className="fas fa-money-check-alt"></i> View Orders
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AdminActionBtns;
/* /* <div className="col-md-4 my-1">
          <button
            className="btn btn-info btn-lg btn-block"
            data-toggle="modal"
            data-target="#ListClientModal"
          >
            <i className="fas fa-address-book"></i> View Clients
          </button>
        </div>*/
