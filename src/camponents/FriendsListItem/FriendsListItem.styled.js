import styled from 'styled-components';
export const List = styled.li`
  width: 350px;
  height: 100px;
  border: 4px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radius.lg};
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`;
export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${p => (p.status ? 'green' : 'red')};
`;
export const Img = styled.img`
  max-width: 80px;
  max-height: 80px;
  padding: ${p => p.theme.radius.lg};
  background-color: ${p => p.theme.colors.accent};
  border-radius: 45%;
`;
export const Name = styled.p`
  margin-left: 30px;
  font-size: 18px;
  font-family: SF Mono, sans-serif;
  font-weight: 700;
  margin-top: 20px;
  color: #212121;
`;
