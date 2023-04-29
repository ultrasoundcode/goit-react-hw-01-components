import {
  ListOfFriends,
  ImgOfFriends,
  NameOFFriends,
  StatusOfFriends,
} from './FriendsListItem.styled';
function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <ListOfFriends>
      <StatusOfFriends status={isOnline === true}></StatusOfFriends>
      <ImgOfFriends src={avatar} alt="User avatar" width="48" />
      <NameOFFriends>{name}</NameOFFriends>
    </ListOfFriends>
  );
}

export default FriendListItem;
