import PropTypes from 'prop-types';
// import FriendList from './FriendList';
import friends from '../friends.json';
import defaultImage from '../images/default.jpg';

const FriendListItem = ({ avatar = defaultImage, name, isOnline, id }) => {
  return (
    <>
      {friends.map(friends => (
        <li key={friends.id} className="item">
          <span className="status">{friends.isOnline}</span>
          <img className="avatar" src={friends.avatar} alt={friends.name} width="48" />
          <p className="name">{friends.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
