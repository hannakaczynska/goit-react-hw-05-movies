import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.p`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const Movie = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid lightgrey;
`;

export const MovieInformations = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid lightgrey;
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;
