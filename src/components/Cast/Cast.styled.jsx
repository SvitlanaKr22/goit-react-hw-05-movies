import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  font-size: inherit;
`;

export const Sublist = styled.ul`
  list-style: none;
  color: orangered;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 1.4;
  font-size: inherit;
  font-weight: 500;
`;
