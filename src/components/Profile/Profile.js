import PropTypes from 'prop-types'; //абсолютные импорты(все библиотеки) стоят выше, чем относительные(мои локальные)
import s from './Profile.module.css';
import defaultImage from '../images/default.jpg';

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => (
  <div className={s.profile}>
    {/* <div className={s['profile-box']}> */}
    <div className={s.box}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers: </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views: </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes: </span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

Profile.defaultProps = {
  name: 'unknown',
  avatar: defaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
//проптайпы не попадают в продакшн

export default Profile;

// ------------------------------------------------------------------
// jsx шаблон

// внутри самого файла компонента объявл компонент, его пропсы, а пропсы он получает там где он рендерится и данные импортировать(джейсон) так где он рендерится

// компонент-передаешь ему данные и объявляешь шаблон, который ты хочешь рендерить, после чего при вызове ты передаешь данные, которые рендерить

// задача компонента объявить сови дефолтные значения для своих пропсов, если не передали
