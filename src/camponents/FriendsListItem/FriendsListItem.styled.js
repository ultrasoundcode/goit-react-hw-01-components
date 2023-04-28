import styled from 'styled-components';
export const ListOfFriends = styled.li`
  width: 350px;
  height: 100px;
  border: 2px solid ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radius.lg};
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`;
export const StatusOfFriends = styled.span``;
export const ImgOfFriends = styled.img`
  width: 70px;
  height: 70px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 45%;
`;
export const NameOFFriends = styled.p`
  margin-left: 30px;
  font-size: 18px;
  font-family: SF Mono, sans-serif;
  font-weight: 700;
  margin-top: 20px;
  color: #212121;
`;
