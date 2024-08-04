import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';

import { signup } from '../api/auth';
const Signup = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      navigate('/admin/dashboard');
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      navigate('/user/dashboard');
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    username: 'wassim',
    email: 'wassim.as@yahoo.com',
    password: 'wass123',
    password2: 'wass123',
    successMsg: false,
    errorMsg: false,
    loading: false,
  });
  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;
  /*********************************
   * EVENT HANDLERS
   *********************************/
  const handleChange = (evt) => {
    //console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: '',
      errorMsg: '',
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // client-side validation
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: 'All fields are required',
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Invalid email',
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: 'Passwords do not match',
      });
    } else {
      const { username, email, password } = formData;
      const data = { username, email, password };

      setFormData({ ...formData, loading: true });

      signup(data)
        .then((response) => {
          console.log('Axios signup success: ', response);
          setFormData({
            username: '',
            email: '',
            password: '',
            password2: '',
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log('Axios signup error: ', err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  /*********************************
   * VIEWS
   *********************************/
  const showSignupForme = () => (
    <Container>
      <Row className="vh-100 d-flex justify-content-right align-items-center">
        <div className="col">
          <div className="p-3">
            <h1>JOIN US ! </h1>
            <h5>Awesome flavor and awesome health conscious oil for you.</h5>
          </div>
        </div>
        <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-success"></div>
          <Card className="shadow px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  <img
                    src={require('./Navlogo.png')}
                    width="120"
                    height="110"
                    alt="Logo"
                  />
                </h2>
                <div>
                  <form
                    className="signup-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <h3>Sign Up</h3>

                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                        value={username}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label>email</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Confirm Password</label>
                      <input
                        name="password2"
                        value={password2}
                        type="password"
                        className="form-control"
                        placeholder="password"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="d-grid">
                      <Button type="submit" className="btn btn-success">
                        Create account
                      </Button>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{' '}
                        <Link to="/Signin" className="text-success fw-bold">
                          Log In
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  /*********************************
   * RENDER
   *********************************/
  return (
    <div className="signup-container">
      {successMsg && showSuccessMsg(successMsg)}
      {errorMsg && showErrorMsg(errorMsg)}
      {loading && <div className="text-center"> {showLoading()} </div>}
      {showSignupForme()}
      {/*<p style={{ color: 'white' }}> {JSON.stringify(formData)} </p>*/}
    </div>
  );
};

export default Signup;
