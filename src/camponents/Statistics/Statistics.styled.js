import styled from 'styled-components';

export const Section = styled.section`
  width: 350px;
  padding: 5px;
  border-radius: ${p => p.theme.radius.lg};
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
`;
export const Title = styled.h2`
  text-align: center;
  background-color: ${p => p.theme.colors.white};
  color: rgb(131, 129, 129);
  font-family: SF Mono, sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  padding: 15px;
  margin: 0;
`;
export const List = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 6);
  padding: 10px 0;
`;
