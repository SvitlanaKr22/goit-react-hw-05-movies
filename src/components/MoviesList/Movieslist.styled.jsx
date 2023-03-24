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

export const List = styled.ul`
  padding: 0;
  list-style: none;
  margin-left: 20px;
`;
