import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {StyledLink, Header, Navigation} from './SharedLayout.styled'

const SharedLayout = () => {

  return (
    <>
      <Header>
      <Navigation>
        <StyledLink to="/"> Home </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
        </Navigation>
        </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
