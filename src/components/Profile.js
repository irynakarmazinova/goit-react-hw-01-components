import PropTypes from 'prop-types'; //абсолютные импорты(все библиотеки) стоят выше, чем относительные(мои локальные)
import defaultImage from '../images/default.jpg';

const Profile = ({
  name = 'unknown',
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
//проптайпы не попадают в продакшн

export default Profile;

// ------------------------------------------------------------------
// jsx шаблон

// внутри самого файла компонента объявл компонент, его пропсы, а пропсы он получает там где он рендерится и данные импортировать(джейсон) так где он рендерится

// компонент-передаешь ему данные и объявляешь шаблон, который ты хочешь рендерить, после чего при вызове ты передаешь данные, которые рендерить

// задача компонента объявить сови дефолтные значения для своих пропсов, если не передали
