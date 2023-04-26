import PropTypes from 'prop-types';
function Friends({ friend: { isOnline, avatar, name } }) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
Friends.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.oneOf(['true', 'false']).isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Friends;
