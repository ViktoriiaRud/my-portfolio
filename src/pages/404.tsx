import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f5f8;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  color: #343a40;
  text-shadow: 6px 6px 8px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
  color: #6c757d;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #495057;
  text-align: center;
  max-width: 600px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background-color: #F0700F;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ce600c;
  }
`;

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <Title>404</Title>
      <Subtitle>Page Not Found</Subtitle>
      <Message>
        Oops! The page you're looking for seems to have wandered off. 
        Don't worry, even the best portfolios have a few missing pieces.
      </Message>
      <StyledLink to="/">Return to Homepage</StyledLink>
    </PageWrapper>
  );
};


export default NotFoundPage;