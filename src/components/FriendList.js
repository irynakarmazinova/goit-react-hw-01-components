import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import friends from '../friends.json';

const FriendList = ({ friends }) => {
  return <ul className="friend-list">{friends}</ul>;
  //   return <ul className="friend-list">{FriendListItem}</ul>;
};

FriendList.propTypes = {
  //   friends: PropTypes.arrayOf(
  //     PropTypes.objectOf({
  //       avatar: PropTypes.string.isRequired,
  //       name: PropTypes.string.isRequired,
  //       isOnline: PropTypes.bool.isRequired,
  //       id: PropTypes.number.isRequired,
  //     }),
  //   ),
  friends: PropTypes.array.isRequired,
};

export default FriendList;
