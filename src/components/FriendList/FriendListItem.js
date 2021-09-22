import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultImage from '../images/default.jpg';

const FriendListItem = ({ friend: { avatar = defaultImage, name, isOnline } }) => {
  const isActive = true;

  return (
    <li className="item">
      <span className={s.status} style={{ color: isActive ? 'green' : 'red' }}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    // id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FriendListItem;
