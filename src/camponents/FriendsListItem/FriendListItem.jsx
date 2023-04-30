import { List, Img, Name, Status } from './FriendsListItem.styled';
function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <List>
      <Status status={isOnline}></Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </List>
  );
}

export default FriendListItem;
