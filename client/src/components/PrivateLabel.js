import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './PrivateLabel.css';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const GreenText = styled.span`
  color: #3cb371;
  font-weight: bold;
`;

const AnimatedText = styled.span`
  display: inline-block;
  animation: ${slideInFromLeft} 1s ease;
`;

const AnimatedDescription = styled.p`
  animation: ${slideInFromLeft} 1s ease;
`;

const AnimatedButton = styled(Button)`
  animation: ${slideInFromLeft} 1s ease;
  background-color: #3cb371;
  border-color: #3cb371;

  &:hover {
    background-color: #2f9e6d;
    border-color: #2f9e6d;
  }
`;

function PrivateLabel() {
  return (
    <Container className="PrivateLabel">
      <Row className="mt-5 justify-content-end">
        <Col className="text-right">
          <AnimatedButton variant="success" href="/wholesale" className="mx-2">
            Wholesale
          </AnimatedButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="text-center">
            <AnimatedText>
              Create <GreenText>Private Label</GreenText> Product
            </AnimatedText>
          </h1>
          <AnimatedDescription className="text-center mt-4">
            Looking to create your own brand of olive oil? Our Private Label
            program allows you to create custom olive oil products with your own
            branding and packaging. Whether you're a retailer looking to expand
            your product line or a business looking to offer a unique gift to
            clients, our Private Label program makes it easy to create a
            high-quality product that meets your needs.
          </AnimatedDescription>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" />
            </Form.Group>

            <Form.Group controlId="productDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter product description"
              />
            </Form.Group>

            <Form.Group controlId="productImage">
              <Form.Label>Product Image URL</Form.Label>
              <Form.Control type="text" placeholder="Enter product image URL" />
            </Form.Group>

            <Form.Group controlId="productCategory">
              <Form.Label>Product Category</Form.Label>
              <Form.Control as="select">
                <option value="">Select a category</option>
                <option value="Extra Virgin">Extra Virgin</option>
                <option value="Virgin">Virgin</option>
                <option value="Pure">Pure</option>
                <option value="Pomace">Pomace</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="productSize">
              <Form.Label>Product Size</Form.Label>
              <Form.Control as="select">
                <option value="">Select a size</option>
                <option value="250 ml">250 ml</option>
                <option value="500 ml">500 ml</option>
                <option value="1 liter">1 liter</option>
                <option value="2 liters">2 liters</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="productNotes">
              <Form.Label>Product Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter any additional notes or instructions"
              />
            </Form.Group>

            <Button variant="success" type="submit" className="btn-block mt-4">
              Create Product
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-center">
            <AnimatedText>Olive Oil Categories</AnimatedText>
          </h2>
          <p className="text-center">
            Extra virgin olive oil is made from pure, cold-pressed olives,
            whereas regular olive oil is a blend, including both cold-pressed
            and processed oils. Pure olive oil is a blend of cold-pressed and
            processed oils, but it contains no chemicals. Finally, pomace olive
            oil is made from the leftover pulp after
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default PrivateLabel;
