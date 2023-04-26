import PropTypes from 'prop-types';
import Friends from './Friends';

function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
