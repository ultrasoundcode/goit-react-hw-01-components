import styled from 'styled-components';
export const ProfileWrap = styled.div`
  background-color: rgb(172, 192, 229);
  margin-top: 20px;
  width: 350px;
  border-radius: 5px;
  padding: 10px 10px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 500ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px;
  background-color: #fff;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;
export const Name = styled.span`
  font-size: 18px;
  font-family: SF Mono, sans-serif;
  font-weight: 700;
  margin-top: 20px;
  color: #212121;
`;
export const Tag = styled.span`
  font-family: SF Mono, sans-serif;
  font-size: 18px;
  margin-top: 10px;
  color: rgb(131, 129, 129);
`;
export const Location = styled.span`
  font-family: SF Mono, sans-serif;
  font-size: 18px;
  margin-top: 10px;
  color: rgb(131, 129, 129);
`;
export const List = styled.ul`
  font-family: SF Mono, sans-serif;
  background-color: #f3f6f9;
  border-top: 1px solid #dfe1e3;
  display: flex;
  list-style-type: none;
  padding: 0;
`;
export const ListItem = styled.li`
  border-right: 1px solid #dfe1e3;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  width: calc(100% / 3);
  padding: 15px 0;
`;
export const Label = styled.span`
  color: rgb(131, 129, 129);
  font-size: 15px;
`;

export const Quantity = styled.span`
  font-family: SF Mono, sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #212121;
`;
