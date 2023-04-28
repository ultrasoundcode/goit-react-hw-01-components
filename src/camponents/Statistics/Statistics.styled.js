import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 350px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(159, 178, 213);
  transition: transform 500ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
export const StatisticsTitle = styled.h2`
  text-align: center;
  background-color: #fff;
  color: rgb(131, 129, 129);
  font-family: SF Mono, sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  padding: 15px;
  margin: 0;
`;
export const StatisticsList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;
export const StaticticsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 6);
  padding: 10px 0;
`;
