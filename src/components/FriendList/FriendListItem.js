import PropTypes from 'prop-types';
import s from './';
import defaultImage from '../images/default.jpg';

const FriendListItem = ({ friend: { avatar = defaultImage, name, isOnline } }) => (
  <li className="item">
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    // id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FriendListItem;
