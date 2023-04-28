import FriendListItem from '../FriendsListItem/FriendListItem';
import { Friends } from './FriendsList.styled';

function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Friends>
  );
}

export default FriendList;
