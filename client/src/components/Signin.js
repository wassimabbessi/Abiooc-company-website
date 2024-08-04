import React, { useEffect, useState } from 'react';

import { Col, Button, Row, Container, Card } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { setAuthentication, isAuthenticated } from '../helpers/auth';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import './Signin.css';
import { signin } from '../api/auth';

const Signin = () => {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      navigate('/admin/dashboard');
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      navigate('/user/dashboard');
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: 'wassim.as@yahoo.com',
    password: 'wassim123',

    errorMsg: false,
    loading: false,
  });
  const { email, password, errorMsg, loading } = formData;
  /*********************************
   * EVENT HANDLERS
   *********************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: '',
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // client-side validation
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: 'All fields are required',
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Invalid email',
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };

      setFormData({ ...formData, loading: true });

      signin(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);
          const redirect = location.search.split('=')[1];

          if (isAuthenticated() && isAuthenticated().role === 1) {
            console.log('Redirecting to admin dashboard');
            navigate('/admin/dashboard');
          } else if (
            isAuthenticated() &&
            isAuthenticated().role === 0 &&
            !redirect
          ) {
            console.log('Redirecting to user dashboard');
            navigate('/user/dashboard');
          } else {
            console.log('Redirecting to shipping');
            navigate('/shipping');
          }
        })
        .catch((err) => {
          console.log('signin api function error: ', err);
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
  const showSigninForme = () => (
    <Container>
      <Row className="vh-100 d-flex justify-content-right align-items-center">
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
                    className="signin-form"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <h3>Sign In</h3>

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

                    <div className="d-grid">
                      <Button type="submit" className="btn btn-success">
                        Login
                      </Button>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{' '}
                        <Link to="/Signup" className="text-success fw-bold">
                          Register here{' '}
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
    <div className="signin-container">
      {errorMsg && showErrorMsg(errorMsg)}
      {loading && <div className="text-center"> {showLoading()} </div>}
      {showSigninForme()}
    </div>
  );
};
export default Signin;
