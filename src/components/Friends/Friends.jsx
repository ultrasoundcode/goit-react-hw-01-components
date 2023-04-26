import PropTypes from 'prop-types';
import styles from './Friendslist.module.css';

function Friends({ friend: { isOnline, avatar, name } }) {
  return (
    <li className={styles.item}>
      <span className={styles.status}>{isOnline}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.className}>{name}</p>
    </li>
  );
}
Friends.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Friends;
