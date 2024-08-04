import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';

const Container = styled(animated.div)`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled(animated.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333333;
`;

const Form = styled(animated.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled(animated.input)`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.2rem;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Textarea = styled(animated.textarea)`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.2rem;
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
`;

const SubmitButton = styled(animated.button)`
  background-color: #4caf50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #3e8e41;
  }
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 500 },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate sending an email by making a POST request to the server
    try {
      const response = await axios.post('/api/submit-form', {
        name,
        email,
        message,
      });
      console.log('Form submitted!', response.data);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container style={spring}>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
}

export default Contact;
