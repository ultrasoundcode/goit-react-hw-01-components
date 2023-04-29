import styled from 'styled-components';
export const Table = styled.table`
  width: 350px;
  margin: 0 auto;
  cursor: pointer;
`;
export const TableHead = styled.thead`
  height: 50px;
  background-color: ${p => p.theme.colors.accent};
`;
export const TableRow = styled.tr`
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
export const TableData = styled.td`
  height: 40px;
  text-align: center;
  background-color: #f3f6f9;
`;
