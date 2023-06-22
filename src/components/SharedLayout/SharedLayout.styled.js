import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export const Header = styled.header`
  height: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  box-shadow: 1px 8px 8px -4px rgba(172, 173, 194, 1);
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-left: 20px;
`;
