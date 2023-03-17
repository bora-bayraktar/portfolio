import React from 'react';
import styled from 'styled-components';
import colors from '@styles/colors';
import Layout from '@components/layout';
import Dot from '@components/dot';
import screens from '@styles/screens';

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title404 = styled.h1`
  font-size: 15rem;
  font-weight: 900;

  @media ${screens.small} {
    font-size: 10rem;
  }
`;

const PageNotFound = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;

  @media ${screens.small} {
    font-size: 2rem;
  }
`;

const StyledLink = styled.a`
  border: 2px solid ${colors.orange};
  border-radius: 10px;
  padding: 1.25rem 1.75rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.orange} !important;
  margin-bottom: 5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 88, 81, 0.15);
  }
`;

export default function NotFoundPage() {
  return (
    <Layout>
      <NotFound>
        <Title404>
          404
          <Dot color={colors.black} />
        </Title404>
        <PageNotFound>Page Not Found</PageNotFound>
        <StyledLink href="/">Go Home</StyledLink>
      </NotFound>
    </Layout>
  );
}
