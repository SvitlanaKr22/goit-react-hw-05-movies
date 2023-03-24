import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;

  border-radius: 4px;
  text-decoration: none;
  list-style: none;
  line-height: 1.5;

  font-weight: 500;
  color: orangered;

  &:hover {
    color: #0a64a0;
  }
`;
