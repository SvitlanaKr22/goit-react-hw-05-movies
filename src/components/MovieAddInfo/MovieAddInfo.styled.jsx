import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;

  border-radius: 4px;
  text-decoration: none;
  list-style: none;
  line-height: 1.5;

  font-weight: 500;
  color: #0a64a0;

  &:hover {
    color: orangered;
  }
`;

export const Header = styled.h3`
  margin-top: 24px;
  margin-bottom: 10px;
  color: orangered;
  padding-left: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 20px;
`;
