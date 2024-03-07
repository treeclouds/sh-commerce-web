import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for styling the page
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 8vw;
  margin-bottom: 2vw;
`;

const NotFoundMessage = styled.p`
  font-size: 3.2vw;
  margin-bottom: 2vw;
`;

const ReturnButton = styled(Link)`
  padding: 3vw 7vw;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundMessage>Oops! The page you are looking is temporarily unavailable.</NotFoundMessage>
      <ReturnButton to="/home">Return to Home</ReturnButton>
    </NotFoundContainer>
  );
}

export default NotFoundPage;
